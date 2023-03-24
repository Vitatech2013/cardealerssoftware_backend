import mongoose from 'mongoose'

const leasecar = new mongoose.Schema({

    lsemailid: {

        type: String,
        required: true
    },
    lbemailid: {

        type: String,
        required: true
    },

    lcarid: {
        type: String,
        required: true
    },

    ldate: {

        type: String,
        required: true
    },

    lamount: {
        type: String,

        required: true
    },

    lperiod: {
        type: String,
        required: true
    },

    lcardtype: {
        type: String,
        required: true
    },

    lcardholder: {
        type: String,
        required: true
    },

    lcardnumber: {
        type: String,
        required: true
    },

    lexpireddate: {
        type: String,
        required: true
    }


}, {
        timestamps: true
    });

const model = mongoose.model('leasecars', leasecar)

export default model