const mongoose = require("mongoose")

const adminschema = mongoose.Schema({
    
    username: {
        type:String
    },
    email: {
        type:String
    },
    password: {
        type:String
    },
    city: {
        type:String
    },
    gender: {
        type:String
    },
    hobby: {
        type:Array
    },
    
});

const Admin = mongoose.model('Admin',adminschema)
module.exports = Admin;