// schema to store all contact information

const mongoose = require("mongoose")

const inquirySchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model("Inquiry", inquirySchema)