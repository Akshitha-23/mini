const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sem4Schema = new Schema({
    rollnumber: {
        type: String,
        // required: true,
        unique: true,
        trim:true,
    },
    ADSJ : {
        type: Number,
        required: true,
    },
    DBMS: {
        type: Number,
        required: true,
    },
    CAMC: {
        type:Number,
        required: true,
    },
    DAA:{
          type: Number, 
          required: true,    
    },
    ANN: {
        type: Number,
        required: true,
    },
},
{
    timestamps: true,
});

const Sem4 = mongoose.model('Sem4',sem4Schema);

module.exports = Sem4;