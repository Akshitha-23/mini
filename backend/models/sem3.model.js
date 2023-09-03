const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sem3Schema = new Schema({
    rollnumber: {
        type: String,
        // required: true,
        unique: true,
        trim:true,
    },
    OOP : {
        type: Number,
        required: true,
    },
    OS: {
        type: Number,
        required: true,
    },
    MSF: {
        type:Number,
        required: true,
    },
    DSGT:{
          type: Number, 
          required: true,    
    },
    DLCO: {
        type: Number,
        required: true,
    },
},
{
    timestamps: true,
});

const Sem3 = mongoose.model('Sem3',sem3Schema);

module.exports = Sem3;