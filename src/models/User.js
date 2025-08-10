/**
 * User Schema & Model
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minLength: 6
    },
    email: {
        type: String,
        unique: true
    },
    dob: {
        type: Date
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
