import mongoose from 'mongoose'

const buyycars = new mongoose.Schema({

    semailid: {

        type: String,
        required: true
    },
    bemailid: {

        type: String,
        required: true
    },

    carid: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    amount: {
        type: String,

        required: true
    },

    cardtype: {
        type: String,
        required: true
    },

    cardholder: {
        type: String,
        required: true
    },

    cardnumber: {
        type: String,
        required: true
    },

    expireddate: {
        type: String,
        required: true
    },


}, {
        timestamps: true
    });

const model = mongoose.model('buycars', buyycars)

export default model