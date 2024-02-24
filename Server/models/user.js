const mongoose = require("mongoose")
const nodemailer = require("nodemailer")
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
    medicineName:{
        type:String,
        required:true,
        trim:true,
    },
    pinCode:{
        type:String,
        required:true,
        trim:true,
    },
    Quantity:{
        type:Number,
        required:true,

    },
    brandName:{
        type:String,
        required:true,
        trim:true,
    },
    manufactureDate:{
        type:Date,
        required:true,
    },
    expiryDate:{
        type:Date,
        required:true,
    },
    Category:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        
    },
    chemistemail:{
        type:String,
        required:true
    }
    
    
    
})
Add.post("save", async function(doc){
    let transporter = nodemailer.createTransport({
      host:process.env.MAIL_HOST,
      auth:{
          user:process.env.MAIL_USER,
          pass:process.env.MAIL_PASS
      }
    });
    let info = await transporter.sendMail({
      from:'Med',
      to:doc.email,
      subject:"Sell MEdicine",
      html:`<h1>hello ${doc.donarName}<h1></br> Your Request has been sent to Chemist`
    })
    console.log(info)
  })
module.exports = mongoose.model("Add",Add);
