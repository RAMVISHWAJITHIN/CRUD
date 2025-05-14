const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    }
}, { timestamps: true }); // <-- Adds createdAt and updatedAt

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;

