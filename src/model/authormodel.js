const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true,
        trim:true
    },
    lname: {
        type: String,
        required: true,
        trim:true
    },
    title: {
        type: String,
        enum: ["Mr", "Mrs", "Miss"],
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minimum: 8
    }

}, { timestamps: true }
)

module.exports = mongoose.model('authorsName', authorSchema)