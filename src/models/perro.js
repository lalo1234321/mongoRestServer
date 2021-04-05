const mongoose = require('mongoose');
const Schema = mongoose.Schema


let perroSchema = new Schema({
    nickName: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('perro',perroSchema);