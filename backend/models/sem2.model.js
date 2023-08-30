const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sem2Schema = new Schema({
    rollnumber: {
        type: String,
        // required: true,
        unique: true,
        trim:true,
    },
    DataStructures: {
        type: Number,
        required: true,
    },
    M2: {
        type: Number,
        required: true,
    },
    Chemistry: {
        type:Number,
        required: true,
    },
    EnvironmentalScience:{
          type: Number, 
          required: true,    
    },
    Python: {
        type: Number,
        required: true,
    },
},
{
    timestamps: true,
});

const Sem2 = mongoose.model('Sem2',sem2Schema);

module.exports = Sem2;