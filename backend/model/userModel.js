const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    description: { type: String },
    birthday: { type: String },
    created: { type: String, required: true }
});

module.exports = mongoose.model('USERS', userSchema);
