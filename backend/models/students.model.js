const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    rollnumber : { 
        type: String,
        // required: true,
        unique : true,
        trim:true,
    },
    name: {
            type: String,
            required: true,
            trim:true,
    },
    degree:{
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
})

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;