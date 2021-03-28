const mongoose = require('mongoose');
const Schema = mongoose.Schema


let userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
});


module.exports = mongoose.model('users',userSchema);