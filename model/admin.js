const mongoose = require("mongoose");
const { type } = require("os");

const adminschema = mongoose.Schema(
    {
        username: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        birthdate: {
            type: String
        },
        city: {
            type: String
        },
        gender: {
            type: String
        },
        hobby: {
            type: Array
        },
    },
    { timestamps: true },
);

const Admin = mongoose.model('Admin', adminschema)
module.exports = Admin;