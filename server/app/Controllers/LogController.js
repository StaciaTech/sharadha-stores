import { google } from "googleapis"
import UserModel from "../Modules/UserModule.js"
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns"
import dotenv from "dotenv"
dotenv.config()
import jwt from "jsonwebtoken"
import _ from 'lodash'
import ejs from "ejs"
import nodeMailer from "nodemailer"
import path from 'path'
import { fileURLToPath } from 'url'
import moment from 'moment'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, {
        expiresIn: "1W",
    })
}

const snsClient = new SNSClient({
    region: process.env.BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
})

const KEYFILEPATH = process.env.KEYFILEPATH

const authenticate = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: KEYFILEPATH,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    return auth.getClient()
}

const currentMonth = moment().format("MMMM")


const spreadsheetId = process.env.SPREADSHEETID
const sheetName = currentMonth

const placeOrder = async (req, res) => {

    const { values } = req.body

    try {

        const removeDuplicatesInCells = (arr, columnsToCheck) => {
            const seen = {} // Track seen values for specified columns

            // Initialize a Set for each specified column
            columnsToCheck.forEach(col => {
                seen[col] = new Set()
            })

            return arr?.map(row => {
                return row?.map((cell, colIndex) => {
                    if (columnsToCheck.includes(colIndex)) { // Check only specified columns
                        if (seen[colIndex].has(cell)) {
                            return '' // Replace duplicate with an empty string
                        } else {
                            seen[colIndex].add(cell) // Add unique value to the set
                            return cell // Keep the value
                        }
                    } else {
                        return cell // Leave other columns untouched
                    }
                })
            })
        }

        const columnsToCheck = [0, 1, 2, 3, 11, 12, 13, 14, 15, 16, 17]

        const transformedValues = removeDuplicatesInCells(values, columnsToCheck)

        const auth = await authenticate()
        const sheets = google.sheets({ version: 'v4', auth })
        const range = sheetName
        const valueInputOption = 'USER_ENTERED'

        // Prepare request
        const resource = { values: transformedValues }

        const customerMobileNo = transformedValues[0][13]
        const storeAddress = transformedValues[0][11]
        const orderId = transformedValues[0][0]
        const customerName = transformedValues[0][2]
        const customerAddress = transformedValues[0][12]
        const totalAmount = transformedValues[0][15]

        // Append data to the sheet
        const result = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption,
            resource,
        })


        let mobNo
        if (storeAddress == "Valasaravakkam") {
            mobNo = process.env.VALASARAVAKKAM_STORE_MOBILE_NO
        } else {
            mobNo = process.env.WESTMAMBALAM_MOBILE_NO
        }

        //#region  - store logic
        const params = {
            Message: `OrderId: ${orderId},\n Customer Name: ${customerName},\n Customer Number: +91${customerMobileNo},\n Customer Address: ${customerAddress},\n Total Order Amount: ₹ ${totalAmount}`,
            PhoneNumber: `+91${mobNo}`, // E.164 format, e.g., +1234567890
        }

        const command = new PublishCommand(params)
        const response = await snsClient.send(command)

        //#endregion

        if (customerMobileNo) {

            const params = {
                Message: `Your order Id ${orderId} has been successfully placed. The store will reach out to you soon, For assistance, call +91${mobNo}, Sharadha Stores ${storeAddress} branch.`,
                PhoneNumber: `+91${customerMobileNo}`, // E.164 format, e.g., +1234567890
            }

            const command = new PublishCommand(params)
            const response = await snsClient.send(command)

        }

        return res.status(200).send({ success: true, message: "success" })

    } catch (err) {
        return res.status(200).send({ success: false, message: "internal server error" })
    }

}

const historyOrder = async (req, res) => {

    try {

        const auth = await authenticate();
        const sheets = google.sheets({ version: 'v4', auth })

        const metadata = await sheets.spreadsheets.get({
            spreadsheetId: spreadsheetId,
        })

        // Get sheet names
        const sheetsInfo = metadata.data.sheets
        const allSheetData = []

        // Loop through each sheet and retrieve its data
        for (const sheet of sheetsInfo) {
            const sheetName = sheet.properties.title

            if (sheetName != "Products") {
                const response = await sheets.spreadsheets.values.get({
                    spreadsheetId: spreadsheetId,
                    range: `${sheetName}`, // Get all data from the sheet
                })

                const rows = response.data.values
                if (rows && rows.length) {
                    rows.forEach(ele => {
                        allSheetData.push(
                            ele
                        )
                    })

                }
            }
        }

        const headers = allSheetData[0]
        // Initialize previous values with null
        let previousRow = Array(headers.length).fill(null)

        // Map data to key-value pairs
        const transformedData = allSheetData.slice(1).map(row => {
            const currentRow = headers.reduce((obj, header, index) => {
                // Use the previous row's value if the current cell is empty
                if (!row[index]) {
                    row[index] = previousRow[index]
                }
                obj[header] = row[index]
                return obj
            }, {})

            // Update previousRow for the next iteration
            previousRow = row
            return currentRow
        })


        let structuredData = _.groupBy(transformedData, 'orderId')

        let array = []

        for (let order in structuredData) {
            let products = []
            structuredData[order].forEach(ele => {
                products.push({
                    name: ele.productName,
                    productId: ele.productId,
                    weight: ele.weight,
                    quantity: ele.quantity,
                    price: ele.price,
                    itemTotal: ele.itemTotal,
                    imageNo: ele.imgNo,
                    unit: ele.unit
                })
            })

            let storeNo
            let upiId
            let gpayNo

            if (structuredData[order][0].storeAddress == "Valasaravakkam") {
                storeNo = process.env.VALASARAVAKKAM_STORE_MOBILE_NO
                upiId = process.env.VALASARAVAKKAM_UPI
                gpayNo = process.env.VALASARAVAKKAM_GPAY
            } else {
                storeNo = process.env.WESTMAMBALAM_MOBILE_NO
                upiId = process.env.WESTMAMBALAM_UPI
                gpayNo = process.env.WESTMAMBALAM_GPAY
            }

            array.push({
                orderId: order,
                customerId: structuredData[order][0].customerId,
                customerName: structuredData[order][0].customerName,
                date: structuredData[order][0].date,
                storeAddress: structuredData[order][0].storeAddress,
                deliveryMode: structuredData[order][0].deliveryMode,
                orderType: structuredData[order][0].orderType,
                address: structuredData[order][0].address,
                phoneNo: structuredData[order][0].phoneNo,
                status: structuredData[order][0].status,
                grandTotal: structuredData[order][0].total,
                transcation: structuredData[order][0].transcation ? structuredData[order][0].transcation : null,
                storeMobileNo: storeNo,
                upiId,
                gpayNo,
                products,
            })
        }

        const userId = req.params.id

        if (userId) {
            array = array.filter((a) => a.customerId == userId)
        }

        array = array.sort((a, b) => b.date.localeCompare(a.date))

        return res.status(200).send({ success: true, docs: array })

    } catch (err) {
        return res.status(500).send({ success: false, message: "internal server error" })
    }

}



const login = async (req, res) => {

    const { countryCode, phoneNumber, email } = req.body
    const otp = Math.floor(1000 + Math.random() * 9000).toString()


    try {
        const params = {
            Message: `Saradha Store OTP is: ${otp}`,
            PhoneNumber: `${countryCode}${phoneNumber}`, // E.164 format, e.g., +1234567890
        }


        const command = new PublishCommand(params)
        const response = await snsClient.send(command)


        let user

        if (phoneNumber) {
            user = await UserModel.findOne({ phoneNo: phoneNumber })
        } else if (email) {
            user = await UserModel.findOne({ email: email })
        }

        if (user) {
            user.otp = otp
            user.save()
            return res.status(200).send({ success: true, doc: user, message: "user already exists" })
        } else {
            await UserModel.create({ phoneNo: phoneNumber, otp, newUser: true })
            return res.status(200).send({ success: true, doc: user, message: "signed up" })
        }

    } catch (err) {
        return res.status(500).send({ success: false, message: "internal server error" })
    }


}

const verifyOTP = async (req, res) => {

    const { countryCode, email, phoneNumber, otp } = req.body

    let user

    try {
        if (email) {
            user = await UserModel.findOne({ email: email })
        } else if (phoneNumber) {
            user = await UserModel.findOne({ phoneNo: phoneNumber })
        }

        if (!user) {
            return res.status(200).send({ success: false, message: "user not found" })
        }



        let token

        if (user?.otp == otp) {

            token = generateToken(user._id)

            if (token != null) {
                user.otp = null
                user.countryCode = `+${countryCode}`
                await user.save()
            }
        }

        else {
            return res.status(200).send({ success: false, message: "Invalid otp" })
        }

        return res.status(200).send({ success: true, message: "otp verified successfully", token: token, })

    } catch (err) {
        return res.status(500).send({ success: false, message: "internal server error" })
    }


}

const checkUser = async (req, res) => {

    const { email, phoneNo } = req.body

    let checkUser

    try {

        if (email) {
            checkUser = await UserModel.findOne({ email })
        } else if (phoneNo) {
            checkUser = await UserModel.findOne({ phoneNo })
        }

        if (checkUser) {
            return res.status(200).send({ success: true, doc: checkUser, newUser: checkUser.newUser, })
        }

        return res.status(200).send({ success: true, newUser: true, message: "new user" })

    } catch (err) {
        return res.status(500).send({ success: false, message: "internal server error" })
    }



}

const register = async (req, res) => {

    const { custId, countryCode, phoneNo, email, name, } = req.body


    let user

    try {

        let mongooseQuery = {
            $or: [
                {
                    isDeleted: 0,
                    email: email
                },
                {
                    phoneNo: phoneNo,
                    isDeleted: 0,
                }
            ],
        }


        user = await UserModel.findOne(mongooseQuery)

        if (user) {

            if (email) {
                if (user.phoneNo != phoneNo) {
                    user = await UserModel.create({
                        custId,
                        countryCode,
                        phoneNo,
                        email,
                        name,
                        newUser: false
                    })
                } else {

                    user.email = email
                    user.name = name
                    user.newUser = false
                    await user.save()
                }

                return res.status(200).send({ success: true, doc: user, message: "user registered successfully" })

            } else if (phoneNo) {

                if (user.email != email) {
                    user.email = email
                    user.name = name
                    user.newUser = false
                    await user.save()

                    return res.status(200).send({ success: true, doc: user, message: "user registered successfully" })
                }
            }

        } else {
            user = await UserModel.create({
                custId,
                countryCode,
                phoneNo,
                email,
                name,
                newUser: false
            })

        }

    } catch (err) {
        return res.status(500).send({ success: false, message: "internal server error" })
    }


    return res.status(200).send({ success: true, doc: user, message: "user registered successfully" })

}

const profileUpdate = async (req, res) => {

    const { phoneNo, email, name } = req.body

    var filterQuery = {
        _id: req.params.id,
        isDeleted: 0
    }

    let updateQuery = {}

    if (name) {
        updateQuery.name = name
    }

    try {

        const user = await UserModel.findOneAndUpdate(filterQuery, updateQuery, { upsert: true, new: true })

        if (user == null) {
            return res.status(200).send({ success: false, doc: [], message: "data not found" })
        }
        return res.status(200).send({ success: true, doc: user })

    } catch (error) {
        return res.status(500).send({ success: false, message: "internal server error" })
    }
}

const getUser = async (req, res) => {

    try {
        const user = await UserModel.findOne({ _id: req.params.id })

        if (!user) {
            return res.status(200).send({ success: true, message: "user not found" })

        }
        return res.status(200).send({ success: true, doc: user })

    } catch (err) {
        return res.status(500).send({ success: false, message: "internal server error" })
    }

}

const verifyEmail = async (req, res) => {

    const { email } = req.body

    try {

        const user = await UserModel.findOne({ _id: req.params.id })

        if (user) {

            const newOtp = Math.floor(1000 + Math.random() * 9000)

            const updateUser = await UserModel.findByIdAndUpdate(
                { _id: user.id },
                { $set: { otp: newOtp } },
                { new: true }
            )

            let emailData = {
                otp: newOtp
            }

            let emailTemplate = await ejs.renderFile(path.join(__dirname, '../Views/verifyOtp.ejs'), emailData)

            // send email
            var transporter = await nodeMailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS
                },
            })

            var mailOptions = {
                from: "Saradha Stores",
                to: email,
                subject: "Verify OTP",
                html: emailTemplate
            }

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return res.status(200).send({ success: false, message: 'Error sending email' });
                }
            })

            return res.status(200).send({
                success: true,
                message: 'Otp Generated'
            })

        } else {
            return res.status(200).send({
                success: false,
                message: 'user not registered'
            })
        }

    } catch (err) {
        return res.status(500).send({ success: false, message: "internal server error" })
    }

}

const verifyMobile = async (req, res) => {

    const { countryCode, phoneNo } = req.body

    try {

        const otp = Math.floor(1000 + Math.random() * 9000).toString()

        let user

        if (phoneNo) {
            user = await UserModel.findOne({ _id: req.params.id })
        }

        if (user) {
            user.otp = otp
            user.save()
        }

        const params = {
            Message: `Saradha Store OTP is: ${otp}`,
            PhoneNumber: `+${countryCode}${phoneNo}`, // E.164 format, e.g., +1234567890
        }

        // try {
        const command = new PublishCommand(params)
        const response = await snsClient.send(command)

        return res.status(200).send({ success: true, doc: user, message: "otp sended" })

    } catch (err) {
        return res.status(500).send({ success: false, message: "internal server error" })
    }

}

const profileVerifyOtp = async (req, res) => {

    const { email, phoneNo, otp } = req.body

    let mongooseQuery = {
        isDeleted: 0,
        _id: req.params.id
    }

    try {

        let user = await UserModel.findOne(mongooseQuery)

        if (!user) {
            return res.status(200).send({ success: false, message: "user not found" })
        }

        if (user.otp == otp) {

            if (email) {
                user.email = email
            } else if (phoneNo) {
                user.phoneNo = phoneNo
            }
            user.otp = null

            await user.save()

            return res.status(200).send({ success: true, message: "profile upated" })
        } else {
            return res.status(200).send({ success: false, message: "otp invalid" })
        }
    } catch (err) {
        return res.status(500).send({ success: false, message: "internal server error" })
    }

}

const allProducts = async (req, res) => {

    try {

        const auth = await authenticate()
        const sheets = google.sheets({ version: 'v4', auth })

        // Specify the sheet name
        const sheetName = 'Products' // Replace with your specific sheet name

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: `${sheetName}`, // Fetch data from the specified sheet
        })

        const rows = response.data.values
        const allSheetData = []

        if (rows && rows.length) {
            rows.forEach(ele => {
                allSheetData.push(ele)
            })
        }

        const headers = allSheetData[0]
        // Initialize previous values with null
        let previousRow = Array(headers.length).fill(null)

        // Map data to key-value pairs
        const transformedData = allSheetData.slice(1).map(row => {
            const currentRow = headers.reduce((obj, header, index) => {
                // Use the previous row's value if the current cell is empty
                if (!row[index]) {
                    row[index] = previousRow[index]
                }
                obj[header] = row[index]
                return obj
            }, {})

            // Update previousRow for the next iteration
            previousRow = row
            return currentRow
        })

        let result = _.groupBy(transformedData, "type")


        let productArray = []
        let categoryArray = []

        for (let type in result) {
            productArray.push({
                type,
                data: result[type]
            })

            categoryArray.push({
                id: result[type][0].id,
                name: type,
                type: type,
                categoryImage: result[type][0].category_url
            })
        }

        let docs = {
            products: productArray,
            categories: categoryArray
        }


        return res.status(200).send({ success: true, docs })
    } catch (err) {
        console.log("err", err)
        return res.status(500).send({ success: false, message: "internal server error" })
    }

}


// API not in use

const addSheetToExistingFile = async (req, res) => {


    const { title } = req.body

    try {

        const today = new Date()
        const monthName = today.toLocaleString('default', { month: 'long' })

        const sheetName = monthName

        const authClient = await authenticate()

        const sheets = google.sheets({ version: "v4", auth: authClient })


        // Add a new sheet
        const addSheetResponse = await sheets.spreadsheets.batchUpdate({
            spreadsheetId: spreadsheetId, // ID of the existing Google Sheet
            resource: {
                requests: [
                    {
                        addSheet: {
                            properties: {
                                title: sheetName, // Name of the new sheet
                            },
                        },
                    },
                ],

            },
        })


        const data = [title]


        const range = `${sheetName}` // Start writing at cell A1
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption: "RAW", // Write data as is
            resource: {
                values: data,
            },
        })

        const dropdownOptions = ["initiated", "pending", "completed", "failed"]; // Dropdown options
        const dropdownColumn = "C";


        // Add dropdown (data validation) to a specific column
        const startRow = 2; // Start dropdown from the second row (below the header)
        const dropdownRange = `${sheetName}!${dropdownColumn}${startRow}:${dropdownColumn}`; // e.g., B2:B
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            resource: {
                requests: [
                    {
                        setDataValidation: {
                            range: {
                                sheetId: addSheetResponse.data.replies[0].addSheet.properties.sheetId,
                                startRowIndex: startRow - 1, // 0-based index
                                endRowIndex: 1000, // Arbitrary high number
                                startColumnIndex: dropdownColumn.charCodeAt(0) - 65, // Convert column letter to index
                                endColumnIndex: dropdownColumn.charCodeAt(0) - 64, // Exclusive end
                            },
                            rule: {
                                condition: {
                                    type: "ONE_OF_LIST",
                                    values: dropdownOptions.map(option => ({ userEnteredValue: option })),
                                },
                                strict: true, // Enforce dropdown selection
                                showCustomUi: true,
                            },
                        },
                    },
                ],
            },
        });


        return res.send("sheet created successfully")

    } catch (err) {
        return res.status(500).send({ success: false, message: "internal server error" })
    }

}

export {
    placeOrder, historyOrder, addSheetToExistingFile, login, verifyOTP, register, profileUpdate, getUser, verifyEmail, verifyMobile,
    profileVerifyOtp, checkUser, allProducts
}


