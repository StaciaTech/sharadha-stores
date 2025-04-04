import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({

    isDeleted: {
        type: "Number",
        default: 0
    },
    custId: {
        type: "String"
    },
    countryCode: {
        type: "String"
    },
    phoneNo: {
        type: "String"
    },
    email: {
        type: "String"
    },
    name: {
        type: "String"
    },
    address: {
        type: "String"
    },
    otp: {
        type: "Number"
    },
    newUser: {
        type: "Boolean"
    }

}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})



UserSchema.virtual('displayPhoneNo').get(function () {
    return `${this.countryCode}${this.phoneNo}`
})

const UserModel = mongoose.model('user', UserSchema)
export default UserModel