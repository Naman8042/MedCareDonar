const mongoose = require("mongoose")

const Add = new mongoose.Schema({
    donarName:{
        type:String,
        required:true,
        trim:true,
    },
    mobileNumber:{
        type:String,
        required:true,
        trim:true,
    },
    address:{
        type:String,
        required:true,
        trim:true,
    },
    equipmentName:{
        type:String,
        required:true,
        trim:true,
    },
    pinCode:{
        type:String,
        required:true,
        trim:true,
    },
    
    brandName:{
        type:String,
        required:true,
        trim:true,
    },
    
    
    Description:{
        type:String,
        // required:true,
    },
    email:{
        type:String,
        // required:true,
        
    }
    
    
    
})
module.exports = mongoose.model("Equipments",Add);
