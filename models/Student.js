const mongoose = require('mongoose')
const Schema = mongoose.Schema
const studentSchema = new Schema({

    firstName : {
        type : String,
        required: true
    },
    lastName : {
        type : String,
        required: true
    },
    
    roll :{
        type : Number,
        required: true
    },
    
    subject :{
        type : String,
        required: true
    }
    
})

module.exports = mongoose.model('student', studentSchema)