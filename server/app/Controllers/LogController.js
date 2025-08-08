import { google } from "googleapis";
import UserModel from "../Modules/UserModule.js";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import _ from "lodash";
import ejs from "ejs";
import nodeMailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import moment from "moment";
import { error } from "console";

// import "../../"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: "1W",
  });
};

const snsClient = new SNSClient({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const KEYFILEPATH = process.env.KEYFILEPATH;

const authenticate = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return auth.getClient();
};

const currentMonth = moment().format("MMMM");

const spreadsheetId = process.env.SPREADSHEETID;
const sheetName = currentMonth;

const ensureSheetExists = async (sheets, spreadsheetId, sheetName) => {
  try {
    // Get spreadsheet metadata to check existing sheets
    const metadata = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    const sheetsInfo = metadata.data.sheets;
    const sheetExists = sheetsInfo.some(
      (sheet) => sheet.properties.title === sheetName
    );

    if (!sheetExists) {
      // Create a new sheet with the current month name
      const createSheetResponse = await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        resource: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: sheetName,
                },
              },
            },
          ],
        },
      });

      // Get the new sheet's ID
      const newSheetId =
        createSheetResponse.data.replies[0].addSheet.properties.sheetId;

      // Find the most recent month's sheet (excluding "Products" and the new sheet)
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const existingMonthSheets = sheetsInfo
        .filter(
          (sheet) =>
            sheet.properties.title !== "Products" &&
            sheet.properties.title !== sheetName &&
            monthNames.includes(sheet.properties.title)
        )
        .map((sheet) => sheet.properties.title);

      let headers = [];
      let previousSheetName = null;

      if (existingMonthSheets.length > 0) {
        // Sort sheets by month order, assuming current year
        const currentYear = moment().year();
        existingMonthSheets.sort((a, b) => {
          const dateA = moment(`${a} ${currentYear}`, "MMMM YYYY");
          const dateB = moment(`${b} ${currentYear}`, "MMMM YYYY");
          return dateB - dateA; // Most recent first
        });
        previousSheetName = existingMonthSheets[0]; // Take the most recent month

        // Fetch headers from the previous month's sheet
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: `${previousSheetName}!1:1`, // Get only the first row
        });

        headers = response.data.values ? response.data.values[0] : [];
      }

      if (headers.length === 0) {
        // Fallback: Define default headers if no previous sheet exists
        headers = [
          "Order_ID",
          "Customer_ID",
          "Customer_Name",
          "Product_Name",
          "Product_ID",
          "Weight",
          "Quantity",
          "Price",
          "Total",
          "imgNo",
          "Unit",
          "Store_Address",
          "Customer_Address",
          "Phone_No",
          "deliveryMode",
          "Total_Amount",
          "Order_Type",
          "Status",
          // Add other headers as needed based on your spreadsheet structure
        ];
        console.warn("No previous month sheet found; using default headers");
      }

      if (previousSheetName) {
        const previousSheetMeta = sheetsInfo.find(
          (sheet) => sheet.properties.title === previousSheetName
        );
        const previousSheetId = previousSheetMeta.properties.sheetId;

        // Copy dropdown validation rule from column Q (index 16) of previous sheet
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          resource: {
            requests: [
              {
                copyPaste: {
                  source: {
                    sheetId: previousSheetId,
                    startRowIndex: 1,
                    endRowIndex: 2, // only need one row with the validation
                    startColumnIndex: 16,
                    endColumnIndex: 17,
                  },
                  destination: {
                    sheetId: newSheetId,
                    startRowIndex: 1,
                    endRowIndex: 1000,
                    startColumnIndex: 16,
                    endColumnIndex: 17,
                  },
                  pasteType: "PASTE_DATA_VALIDATION",
                },
              },
            ],
          },
        });

        console.log(
          `Copied dropdown from ${previousSheetName} column Q to ${sheetName}`
        );
      }

      if (headers.length > 0) {
        // Append headers to the new sheet
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: `${sheetName}!A1`,
          valueInputOption: "USER_ENTERED",
          resource: { values: [headers] },
        });

        // Apply bold formatting to the header row
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          resource: {
            requests: [
              {
                repeatCell: {
                  range: {
                    sheetId: newSheetId,
                    startRowIndex: 0,
                    endRowIndex: 1,
                    startColumnIndex: 0,
                    endColumnIndex: headers.length,
                  },
                  cell: {
                    userEnteredFormat: {
                      textFormat: {
                        bold: true,
                      },
                    },
                  },
                  fields: "userEnteredFormat.textFormat",
                },
              },
            ],
          },
        });

        console.log(
          `Copied headers from ${
            previousSheetName || "default"
          } to ${sheetName} with bold formatting`
        );
      } else {
        console.warn("No headers available to append");
      }

      console.log(`Created new sheet: ${sheetName}`);
    } else {
      console.log(`Sheet ${sheetName} already exists`);
    }
  } catch (err) {
    console.error(`Error ensuring sheet exists: ${err}`);
    throw err;
  }
};
const placeOrder = async (req, res) => {
  const currentMonth = moment().format("MMMM"); // Compute per request
  const sheetName = currentMonth;
  const { values } = req.body;

  console.log("Current month:", currentMonth);

  try {
    const removeDuplicatesInCells = (arr, columnsToCheck) => {
      const seen = {};
      columnsToCheck.forEach((col) => {
        seen[col] = new Set();
      });

      return arr?.map((row) => {
        return row?.map((cell, colIndex) => {
          if (columnsToCheck.includes(colIndex)) {
            if (seen[colIndex].has(cell)) {
              return "";
            } else {
              seen[colIndex].add(cell);
              return cell;
            }
          } else {
            return cell;
          }
        });
      });
    };

    const columnsToCheck = [0, 1, 2, 3, 11, 12, 13, 14, 15, 16, 17];
    const transformedValues = removeDuplicatesInCells(values, columnsToCheck);

    const auth = await authenticate();
    const sheets = google.sheets({ version: "v4", auth });

    // Ensure the sheet exists and has bold headers
    await ensureSheetExists(sheets, spreadsheetId, sheetName);

    const range = `${sheetName}!A2`; // Start from A2 to skip headers
    const valueInputOption = "USER_ENTERED";
    const resource = { values: transformedValues };

    // Extract customer and order details
    const customerMobileNo = transformedValues[0][13];
    const storeAddress = transformedValues[0][11];
    const orderId = transformedValues[0][0];
    const customerName = transformedValues[0][2];
    const customerAddress = transformedValues[0][12];
    const totalAmount = transformedValues[0][15];

    // Append data to the sheet
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });

    // Determine store mobile number
    let mobNo;
    if (storeAddress === "Valasaravakkam") {
      mobNo = process.env.VALASARAVAKKAM_STORE_MOBILE_NO;
    } else {
      mobNo = process.env.WESTMAMBALAM_MOBILE_NO;
    }

    // Uncomment and adjust SNS notifications if needed
    /*
    const params = {
      Message: `OrderId: ${orderId},\n Customer Name: ${customerName},\n Customer Number: +91${customerMobileNo},\n Customer Address: ${customerAddress},\n Total Order Amount: ₹ ${totalAmount}`,
      PhoneNumber: `+91${mobNo}`,
    };
    const command = new PublishCommand(params);
    await snsClient.send(command);

    if (customerMobileNo) {
      const customerParams = {
        Message: `Your order Id ${orderId} has been successfully placed. The store will reach out to you soon, For assistance, call +91${mobNo}, Sharadha Stores ${storeAddress} branch.`,
        PhoneNumber: `+91${customerMobileNo}`,
      };
      const customerCommand = new PublishCommand(customerParams);
      await snsClient.send(customerCommand);
    }
    */

    return res.status(200).send({ success: true, message: "success" });
  } catch (err) {
    console.error("Error in placeOrder:", err);
    return res.status(500).send({
      success: false,
      error: err.message,
      message: "internal server error",
    });
  }
};
const historyOrder = async (req, res) => {
  try {
    const auth = await authenticate();
    const sheets = google.sheets({ version: "v4", auth });

    const metadata = await sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId,
    });

    // Get sheet names
    const sheetsInfo = metadata.data.sheets;
    const allSheetData = [];

    // Loop through each sheet and retrieve its data
    for (const sheet of sheetsInfo) {
      const sheetName = sheet.properties.title;

      if (sheetName != "Products") {
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: spreadsheetId,
          range: `${sheetName}`, // Get all data from the sheet
        });

        const rows = response.data.values;
        if (rows && rows.length) {
          rows.forEach((ele) => {
            allSheetData.push(ele);
          });
        }
      }
    }

    const headers = allSheetData[0];
    // Initialize previous values with null
    let previousRow = Array(headers.length).fill(null);

    // Map data to key-value pairs
    const transformedData = allSheetData.slice(1).map((row) => {
      const currentRow = headers.reduce((obj, header, index) => {
        // Use the previous row's value if the current cell is empty
        if (!row[index]) {
          row[index] = previousRow[index];
        }
        obj[header] = row[index];
        return obj;
      }, {});

      // Update previousRow for the next iteration
      previousRow = row;
      return currentRow;
    });

    let structuredData = _.groupBy(transformedData, "Order_ID");

    let array = [];

    for (let order in structuredData) {
      let products = [];
      structuredData[order].forEach((ele) => {
        products.push({
          name: ele.Product_Name,
          productId: ele.Product_ID,
          weight: ele.Weight,
          quantity: ele.Quantity,
          price: ele.Price,
          itemTotal: ele.Total,
          imageNo: ele.imgNo,
          unit: ele.Unit,
        });
      });

      let storeNo;
      let upiId = process.env.UPI;
      let gpayNo = process.env.GPAY;

      if (structuredData[order][0].storeAddress == "Valasaravakkam") {
        storeNo = process.env.VALASARAVAKKAM_STORE_MOBILE_NO;
        // upiId = process.env.VALASARAVAKKAM_UPI
        // gpayNo = process.env.VALASARAVAKKAM_GPAY
      } else {
        storeNo = process.env.WESTMAMBALAM_MOBILE_NO;
        // upiId = process.env.WESTMAMBALAM_UPI
        // gpayNo = process.env.WESTMAMBALAM_GPAY
      }

      array.push({
        orderId: order,
        customerId: structuredData[order][0].Customer_ID,
        customerName: structuredData[order][0].Customer_Name,
        date: structuredData[order][0].Date,
        storeAddress: structuredData[order][0].Store_Address,
        deliveryMode: structuredData[order][0].deliveryMode,
        orderType: structuredData[order][0].Order_Type,
        address: structuredData[order][0].Store_Address,
        phoneNo: structuredData[order][0].Phone_No,
        status: structuredData[order][0].Status,
        grandTotal: structuredData[order][0].Total,
        transcation: structuredData[order][0].Transaction
          ? structuredData[order][0].Transaction
          : null,
        storeMobileNo: storeNo,
        upiId,
        gpayNo,
        products,
      });
    }

    const userId = req.params.id;

    if (userId) {
      array = array.filter((a) => a.customerId == userId);
    }
    const currentYear = new Date().getFullYear();

    array = array.sort((a, b) => {
      return (
        new Date(`${currentYear} ${b.date}`) -
        new Date(`${currentYear} ${a.date}`)
      );
    });

    return res.status(200).send({ success: true, docs: array });
  } catch (err) {
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const login = async (req, res) => {
  const { countryCode, phoneNumber, email } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000).toString();

  try {
    const params = {
      Message: `Saradha Store OTP is: ${otp}`,
      PhoneNumber: `${countryCode}${phoneNumber}`, // E.164 format, e.g., +1234567890
    };

    const command = new PublishCommand(params);
    const response = await snsClient.send(command);
    console.log(response);

    let user;

    if (phoneNumber) {
      user = await UserModel.findOne({ phoneNo: phoneNumber });
    } else if (email) {
      user = await UserModel.findOne({ email: email });
    }

    if (user) {
      user.otp = otp;
      user.save();
      return res
        .status(200)
        .send({ success: true, doc: user, message: "user already exists" });
    } else {
      await UserModel.create({ phoneNo: phoneNumber, otp, newUser: true });
      return res
        .status(200)
        .send({ success: true, doc: user, message: "signed up" });
    }
  } catch (err) {
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const verifyOTP = async (req, res) => {
  const { countryCode, email, phoneNumber, otp } = req.body;

  let user;

  try {
    if (email) {
      user = await UserModel.findOne({ email: email });
    } else if (phoneNumber) {
      user = await UserModel.findOne({ phoneNo: phoneNumber });
    }

    if (!user) {
      return res
        .status(200)
        .send({ success: false, message: "user not found" });
    }

    let token;

    if (user?.otp == otp) {
      token = generateToken(user._id);

      if (token != null) {
        user.otp = null;
        user.countryCode = `+${countryCode}`;
        await user.save();
      }
    } else {
      return res.status(200).send({ success: false, message: "Invalid otp" });
    }

    return res.status(200).send({
      success: true,
      message: "otp verified successfully",
      token: token,
    });
  } catch (err) {
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const checkUser = async (req, res) => {
  const { email, phoneNo } = req.body;

  let checkUser;

  try {
    if (email) {
      checkUser = await UserModel.findOne({ email });
    } else if (phoneNo) {
      checkUser = await UserModel.findOne({ phoneNo });
    }

    if (checkUser) {
      return res
        .status(200)
        .send({ success: true, doc: checkUser, newUser: checkUser.newUser });
    }

    return res
      .status(200)
      .send({ success: true, newUser: true, message: "new user" });
  } catch (err) {
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const register = async (req, res) => {
  console.log(req.body);

  const { custId, countryCode, phoneNo, email, name } = req.body;

  console.log("api is triggered");

  let user;

  // try {
  // let mongooseQuery = {
  //   $or: [
  //     {
  //       isDeleted: 0,
  //       email: email,
  //     },
  //     {
  //       phoneNo: phoneNo,
  //       isDeleted: 0,
  //     },
  //   ],
  // };

  // user = await UserModel.findOne(mongooseQuery);

  const orConditions = [];

  if (email && email.trim() !== "") {
    orConditions.push({ email, isDeleted: 0 });
  }

  if (phoneNo && phoneNo.trim() !== "") {
    orConditions.push({ phoneNo, isDeleted: 0 });
  }

  if (orConditions.length > 0) {
    user = await UserModel.findOne({ $or: orConditions });
  }
  console.log(user, "user existed", phoneNo);

  // return res.status(200).send({ user });

  if (user) {
    if (email) {
      if (user.phoneNo != phoneNo) {
        user = await UserModel.create({
          custId,
          countryCode,
          phoneNo,
          email,
          name,
          newUser: false,
        });
      } else {
        user.email = email;
        user.name = name;
        user.newUser = false;
        await user.save();
      }

      return res.status(200).send({
        success: true,
        doc: user,
        message: "user registered successfully",
      });
    } else if (phoneNo) {
      if (user.email != email) {
        user.email = email;
        user.name = name;
        user.newUser = false;
        await user.save();

        return res.status(200).send({
          success: true,
          doc: user,
          message: "user registered successfully",
        });
      }
    }
  } else {
    user = await UserModel.create({
      custId,
      countryCode,
      phoneNo,
      email,
      name,
      newUser: false,
    });
  }
  // } catch (err) {
  //   return res
  //     .status(200)
  //     .send({ success: false, error: err, message: "internal server error" });
  // }

  return res.status(200).send({
    success: true,
    doc: user,
    message: "user registered successfully",
  });
};

const profileUpdate = async (req, res) => {
  const { phoneNo, email, name } = req.body;

  var filterQuery = {
    _id: req.params.id,
    isDeleted: 0,
  };

  let updateQuery = {};

  if (name) {
    updateQuery.name = name;
  }

  try {
    const user = await UserModel.findOneAndUpdate(filterQuery, updateQuery, {
      upsert: true,
      new: true,
    });

    if (user == null) {
      return res
        .status(200)
        .send({ success: false, doc: [], message: "data not found" });
    }
    return res.status(200).send({ success: true, doc: user });
  } catch (error) {
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.params.id });

    if (!user) {
      return res.status(200).send({ success: true, message: "user not found" });
    }
    return res.status(200).send({ success: true, doc: user });
  } catch (err) {
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const logoUrl = `https://sharadha-stores.s3.ap-south-1.amazonaws.com/emailLogo/saradha-stores-logo.png`;

const verifyEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ _id: req.params.id });

    if (user) {
      const newOtp = Math.floor(1000 + Math.random() * 9000);

      const updateUser = await UserModel.findByIdAndUpdate(
        { _id: user.id },
        { $set: { otp: newOtp } },
        { new: true }
      );

      let emailData = {
        otp: newOtp.toString(),
        userName: user.name,
        logoUrl: logoUrl,
        // logoUrl:
      };

      let emailTemplate = await ejs.renderFile(
        path.join(__dirname, "../Views/verifyOtp.ejs"),
        emailData
      );

      // send email
      var transporter = await nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      var mailOptions = {
        from: "Saradha Stores",
        to: email,
        subject: "Verify OTP",
        html: emailTemplate,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res
            .status(200)
            .send({ success: false, message: "Error sending email" });
        }
      });

      return res.status(200).send({
        success: true,
        message: "Otp Generated",
      });
    } else {
      return res.status(200).send({
        success: false,
        message: "user not registered",
      });
    }
  } catch (err) {
    console.log("err", err);
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const verifyMobile = async (req, res) => {
  const { countryCode, phoneNo } = req.body;

  try {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    let user;

    if (phoneNo) {
      user = await UserModel.findOne({ _id: req.params.id });
    }

    if (user) {
      user.otp = otp;
      user.save();
    }

    const params = {
      Message: `Saradha Store OTP is: ${otp}`,
      PhoneNumber: `+${countryCode}${phoneNo}`, // E.164 format, e.g., +1234567890
    };

    // try {
    const command = new PublishCommand(params);
    const response = await snsClient.send(command);

    return res
      .status(200)
      .send({ success: true, doc: user, message: "otp sended" });
  } catch (err) {
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const profileVerifyOtp = async (req, res) => {
  const { email, phoneNo, otp } = req.body;

  let mongooseQuery = {
    isDeleted: 0,
    _id: req.params.id,
  };

  try {
    let user = await UserModel.findOne(mongooseQuery);

    if (!user) {
      return res
        .status(200)
        .send({ success: false, message: "user not found" });
    }

    if (user.otp == otp) {
      if (email) {
        user.email = email;
      } else if (phoneNo) {
        user.phoneNo = phoneNo;
      }
      user.otp = null;

      await user.save();

      return res.status(200).send({ success: true, message: "profile upated" });
    } else {
      return res.status(200).send({ success: false, message: "otp invalid" });
    }
  } catch (err) {
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const allProducts = async (req, res) => {
  try {
    const auth = await authenticate();
    const sheets = google.sheets({ version: "v4", auth });

    // Specify the sheet name
    const sheetName = "Products"; // Replace with your specific sheet name

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: `${sheetName}`, // Fetch data from the specified sheet
    });

    const rows = response.data.values;
    const allSheetData = [];

    if (rows && rows.length) {
      rows.forEach((ele) => {
        allSheetData.push(ele);
      });
    }

    const headers = allSheetData[0];
    // Initialize previous values with null
    let previousRow = Array(headers.length).fill(null);

    // Map data to key-value pairs
    const transformedData = allSheetData.slice(1).map((row) => {
      const currentRow = headers.reduce((obj, header, index) => {
        // Use the previous row's value if the current cell is empty
        if (!row[index]) {
          row[index] = previousRow[index];
        }
        obj[header] = row[index];
        return obj;
      }, {});

      // Update previousRow for the next iteration
      previousRow = row;
      return currentRow;
    });

    let result = _.groupBy(transformedData, "type");

    let productArray = [];
    let categoryArray = [];

    for (let type in result) {
      productArray.push({
        type,
        data: result[type],
      });

      categoryArray.push({
        id: result[type][0].id,
        name: type,
        type: type,
        categoryImage: result[type][0].category_url,
      });
    }

    let docs = {
      products: productArray,
      categories: categoryArray,
    };

    return res.status(200).send({ success: true, docs });
  } catch (err) {
    console.log("err", err);
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const accountDeletionVerify = async (req, res) => {
  const { name, phoneNo } = req.body;

  let mongooseQuery = {
    name: name,
    phoneNo: phoneNo,
  };

  try {
    let user = await UserModel.findOne(mongooseQuery);

    if (user) {
      const params = {
        Message: `Saradha Store OTP is: ${otp}`,
        PhoneNumber: `+91${phoneNo}`, // E.164 format, e.g., +1234567890
      };

      const command = new PublishCommand(params);
      const response = await snsClient.send(command);

      return res
        .status(200)
        .send({ success: true, doc: user, message: "otp sended" });
    } else {
      return res.status(200).send({
        success: false,
        message: "Verification fasle, check your credentials",
      });
    }
  } catch (err) {
    console.log("err", err);
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const accountDeletionRequest = async (req, res) => {
  const { name, phoneNo, otp } = req.body;

  let mongooseQuery = {
    name: name,
    phoneNo: phoneNo,
    otp: otp,
  };
  try {
    let user = await UserModel.findOne(mongooseQuery);

    if (user) {
      let emailData = {
        userName: user.name,
        userEmail: user.email,
        userPhone: user.phoneNo,
        logoUrl: logoUrl,
      };

      let emailTemplate = await ejs.renderFile(
        path.join(__dirname, "../Views/deleteRequest.ejs"),
        emailData
      );

      // send email
      var transporter = await nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      var mailOptions = {
        from: "Saradha Stores",
        to: user.email,
        subject: "Delete Request Mail",
        html: emailTemplate,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res
            .status(200)
            .send({ success: false, message: "Error sending email" });
        }
      });

      return res.status(200).send({
        success: true,
        message: "Mail Submitted Successfully",
      });
    }
  } catch (err) {
    return res
      .status(200)
      .send({ success: false, error: err, message: "internal server error" });
  }
};

const me = async (req, res) => {
  try {
    let mongooseQuery = {
      isDeleted: 0,
      _id: req.params.userId,
    };

    let user = await UserModel.findOne(mongooseQuery);

    return res.status(200).send({ success: true, doc: user });
  } catch (err) {
    return res.status(200).send({ success: true, doc: user, error: err });
  }
};

// API not in use

const addSheetToExistingFile = async (req, res) => {
  // const { title } = req.body
  // const today = new Date();
  // const monthName = today.toLocaleString('default', { month: 'long' });
  // const sheetName = monthName;
  // const authClient = await authenticate();
  // const sheets = google.sheets({ version: "v4", auth: authClient });
  // // Add a new sheet
  // const addSheetResponse = await sheets.spreadsheets.batchUpdate({
  //     spreadsheetId,
  //     resource: {
  //         requests: [
  //             {
  //                 addSheet: {
  //                     properties: {
  //                         title: sheetName,
  //                     },
  //                 },
  //             },
  //         ],
  //     },
  // });
  // const data = [title];
  // const range = `${sheetName}`; // Start writing at cell A1
  // await sheets.spreadsheets.values.update({
  //     spreadsheetId,
  //     range,
  //     valueInputOption: "RAW",
  //     resource: {
  //         values: data,
  //     },
  // });
  // const dropdownOptions = ["initiated", "pending", "completed", "failed"];
  // const dropdownColumn = "Q";
  // const startRow = 2;
  // const dropdownRange = `${sheetName}!${dropdownColumn}${startRow}:${dropdownColumn}`;
  // // Get the newly created sheet ID
  // const sheetId = addSheetResponse.data.replies[0].addSheet.properties.sheetId;
  // // Add dropdown (data validation)
  // await sheets.spreadsheets.batchUpdate({
  //     spreadsheetId,
  //     resource: {
  //         requests: [
  //             {
  //                 setDataValidation: {
  //                     range: {
  //                         sheetId,
  //                         startRowIndex: startRow - 1,
  //                         endRowIndex: 1000, // Arbitrary high number
  //                         startColumnIndex: dropdownColumn.charCodeAt(0) - 65,
  //                         endColumnIndex: dropdownColumn.charCodeAt(0) - 64,
  //                     },
  //                     rule: {
  //                         condition: {
  //                             type: "ONE_OF_LIST",
  //                             values: dropdownOptions.map(option => ({ userEnteredValue: option })),
  //                         },
  //                         strict: true,
  //                         showCustomUi: true,
  //                     },
  //                 },
  //             },
  //             // Conditional Formatting Rules for Colors
  //             {
  //                 addConditionalFormatRule: {
  //                     rule: {
  //                         ranges: [
  //                             {
  //                                 sheetId,
  //                                 startRowIndex: startRow - 1,
  //                                 endRowIndex: 1000,
  //                                 startColumnIndex: dropdownColumn.charCodeAt(0) - 65,
  //                                 endColumnIndex: dropdownColumn.charCodeAt(0) - 64,
  //                             },
  //                         ],
  //                         booleanRule: {
  //                             condition: {
  //                                 type: "TEXT_EQ",
  //                                 values: [{ userEnteredValue: "initiated" }],
  //                             },
  //                             format: {
  //                                 backgroundColor: { red: 1, green: 1, blue: 0 }, // Yellow
  //                             },
  //                         },
  //                     },
  //                     index: 0,
  //                 },
  //             },
  //             {
  //                 addConditionalFormatRule: {
  //                     rule: {
  //                         ranges: [
  //                             {
  //                                 sheetId,
  //                                 startRowIndex: startRow - 1,
  //                                 endRowIndex: 1000,
  //                                 startColumnIndex: dropdownColumn.charCodeAt(0) - 65,
  //                                 endColumnIndex: dropdownColumn.charCodeAt(0) - 64,
  //                             },
  //                         ],
  //                         booleanRule: {
  //                             condition: {
  //                                 type: "TEXT_EQ",
  //                                 values: [{ userEnteredValue: "pending" }],
  //                             },
  //                             format: {
  //                                 backgroundColor: { red: 1, green: 0.5, blue: 0 }, // Orange
  //                             },
  //                         },
  //                     },
  //                     index: 1,
  //                 },
  //             },
  //             {
  //                 addConditionalFormatRule: {
  //                     rule: {
  //                         ranges: [
  //                             {
  //                                 sheetId,
  //                                 startRowIndex: startRow - 1,
  //                                 endRowIndex: 1000,
  //                                 startColumnIndex: dropdownColumn.charCodeAt(0) - 65,
  //                                 endColumnIndex: dropdownColumn.charCodeAt(0) - 64,
  //                             },
  //                         ],
  //                         booleanRule: {
  //                             condition: {
  //                                 type: "TEXT_EQ",
  //                                 values: [{ userEnteredValue: "completed" }],
  //                             },
  //                             format: {
  //                                 backgroundColor: { red: 0, green: 1, blue: 0 }, // Green
  //                             },
  //                         },
  //                     },
  //                     index: 2,
  //                 },
  //             },
  //             {
  //                 addConditionalFormatRule: {
  //                     rule: {
  //                         ranges: [
  //                             {
  //                                 sheetId,
  //                                 startRowIndex: startRow - 1,
  //                                 endRowIndex: 1000,
  //                                 startColumnIndex: dropdownColumn.charCodeAt(0) - 65,
  //                                 endColumnIndex: dropdownColumn.charCodeAt(0) - 64,
  //                             },
  //                         ],
  //                         booleanRule: {
  //                             condition: {
  //                                 type: "TEXT_EQ",
  //                                 values: [{ userEnteredValue: "failed" }],
  //                             },
  //                             format: {
  //                                 backgroundColor: { red: 1, green: 0, blue: 0 }, // Red
  //                             },
  //                         },
  //                     },
  //                     index: 3,
  //                 },
  //             },
  //         ],
  //     },
  // })
  // console.log("Dropdown with conditional formatting applied.");
  // return res.send("success")
};

export {
  placeOrder,
  historyOrder,
  addSheetToExistingFile,
  login,
  verifyOTP,
  register,
  profileUpdate,
  getUser,
  verifyEmail,
  verifyMobile,
  profileVerifyOtp,
  checkUser,
  allProducts,
  accountDeletionVerify,
  accountDeletionRequest,
  me,
};

// try {

//     const today = new Date()
//     const monthName = today.toLocaleString('default', { month: 'long' })
//     const sheetName = monthName
//     const authClient = await authenticate()
//     const sheets = google.sheets({ version: "v4", auth: authClient })

//     // Add a new sheet
//     const addSheetResponse = await sheets.spreadsheets.batchUpdate({
//         spreadsheetId: spreadsheetId, // ID of the existing Google Sheet
//         resource: {
//             requests: [
//                 {
//                     addSheet: {
//                         properties: {
//                             title: sheetName, // Name of the new sheet
//                         },
//                     },
//                 },
//             ],

//         },
//     })

//     const data = [title]

//     const range = `${sheetName}` // Start writing at cell A1
//     await sheets.spreadsheets.values.update({
//         spreadsheetId,
//         range,
//         valueInputOption: "RAW", // Write data as is
//         resource: {
//             values: data,
//         },
//     })

//     const dropdownOptions = ["initiated", "pending", "completed", "failed"]; // Dropdown options
//     const dropdownColumn = "Q";

//     // Add dropdown (data validation) to a specific column
//     const startRow = 2; // Start dropdown from the second row (below the header)
//     const dropdownRange = `${sheetName}!${dropdownColumn}${startRow}:${dropdownColumn}`; // e.g., B2:B
//     await sheets.spreadsheets.batchUpdate({
//         spreadsheetId,
//         resource: {
//             requests: [
//                 {
//                     setDataValidation: {
//                         range: {
//                             sheetId: addSheetResponse.data.replies[0].addSheet.properties.sheetId,
//                             startRowIndex: startRow - 1, // 0-based index
//                             endRowIndex: 1000, // Arbitrary high number
//                             startColumnIndex: dropdownColumn.charCodeAt(0) - 65, // Convert column letter to index
//                             endColumnIndex: dropdownColumn.charCodeAt(0) - 64, // Exclusive end
//                         },
//                         rule: {
//                             condition: {
//                                 type: "ONE_OF_LIST",
//                                 values: dropdownOptions.map(option => ({ userEnteredValue: option })),
//                             },
//                             strict: true, // Enforce dropdown selection
//                             showCustomUi: true,
//                         },
//                     },
//                 },
//             ],
//         },
//     });

//     return res.send("sheet created successfully")

// } catch (err) {
//     return res.status(200).send({ success: false, message: "internal server error" })
// }
