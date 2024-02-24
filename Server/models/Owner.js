const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
   
})
module.exports = mongoose.model("user",userSchema);
