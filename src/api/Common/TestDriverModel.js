import mongoose from 'mongoose'

const testcars = new mongoose.Schema({

    source: {

        type: String,
        required: true
    },
    destination: {

        type: String,
        required: true
    },

    tkmsdriven: {
        type: String,
        required: true
    },

    licensenumber: {

        type: String,
        required: true
    },
    aboutcar: {
        type: String
    },

    query: {
        type: String
    }


}, {
        timestamps: true
    });

const model = mongoose.model('testcars', testcars)

export default model