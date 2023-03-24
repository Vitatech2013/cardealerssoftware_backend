import mongoose from 'mongoose'

const SellerAndBuyerReg = new mongoose.Schema({
    completename: {

        type: String,
        required: true
    },
    emailid: {

        type: String,
        required: true
    },
    address: {

        type: String,
        required: true
    },
    password: {
        type: String,

        required: true
    },
    mobileno: {
        type: Number
    }

}, {
        timestamps: true
    });

const model = mongoose.model('Registration', SellerAndBuyerReg)

export default model