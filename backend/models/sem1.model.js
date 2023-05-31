const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sem1Schema = new Schema({
    rollnumber: {
        type: String,
        // required: true,
        unique: true,
        trim:true,
    },
    Cprogramming : {
        type: Number,
        required: true,
    },
    M1: {
        type: Number,
        required: true,
    },
    Physics: {
        type:Number,
        required: true,
    },
    EngineeringDrawing:{
          type: Number, 
          required: true,    
    },
    English: {
        type: Number,
        required: true,
    },
},
{
    timestamps: true,
});

const Sem1 = mongoose.model('Sem1',sem1Schema);

module.exports = Sem1;