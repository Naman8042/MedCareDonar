const mongoose = require("mongoose")

const medicines = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    genericname:{
        type:String,
        required:true,
        trim:true,
    },
   Uses:{
        type:String,
        required:true,
       
    },
   incridents:{
        type:String,
        required:true,
       
    },
    
})
module.exports = mongoose.model("medicine",medicines);
