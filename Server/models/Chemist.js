const mongoose = require("mongoose")

const Signup = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    shopname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    }
    
    
    
})
module.exports = mongoose.model("chemist",Signup);
