const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentImageSchema = new Schema({
    rollnumber: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    image: {
        data: Buffer, // Store binary image data
        contentType: String, // Specify the type of data (e.g., 'image/jpeg', 'image/png', 'image/gif')
        required: true,
    },
}, {
    timestamps: true,
});

const StudentImage = mongoose.model('StudentImage', studentImageSchema);

module.exports = StudentImage;
