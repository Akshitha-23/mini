const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    rollnumber : { 
        type: String,
        // required: true,
        unique : true,
        trim:true,
    },
    password: {
            type: String,
            required: true,
    },
    firstname : {
        type: String,
        required : true,
    },
    secondname : {
        type: String, 
        required : true,
    },
    mobile :{
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
})

const User = mongoose.model('User',userSchema);

module.exports = User;