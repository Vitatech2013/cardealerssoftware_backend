import mongoose from 'mongoose'

const adminScheme = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    emailid:{
        type: String
    }
}, {
        timestamps: true
    });
const model = mongoose.model('admins', adminScheme)

export default model