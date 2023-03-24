import mongoose from 'mongoose'

const storecarr = new mongoose.Schema({
    cartype:{
        type: String,
    },
    emailid: {

        type: String,
        required: true
    },
    vehiclename: {

        type: String,
        required: true
    },
    brandnames: {
        type: String,
        required: true
    },

    vehiclemodel: {

        type: String,
        required: true
    },

    yearofreg: {
        type: String,

        required: true
    },

    fueltype: {
        type: String,
        required: true
    },

    kmsdriven: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    colour: {
        type: String,
        required: true
    },

    regcity: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    image:{
        type: String
    },
    status:{
        type:String
    }
}, {
        timestamps: true
    });

const model = mongoose.model('storecars', storecarr)

export default model