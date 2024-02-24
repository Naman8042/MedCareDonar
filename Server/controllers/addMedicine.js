const Todo = require("../models/user")
const nodemailer = require("nodemailer")
exports.createUser = async(req,res)=>{
    try{
        const {donarName,mobileNumber,
            address,
            pinCode,
            medicineName,Quantity, brandName, manufactureDate,expiryDate,Category,email,chemistemail} = req.body;
        
       
      
           
            const response = await Todo.create({donarName,mobileNumber,
                address,
                pinCode,
                medicineName,Quantity, brandName, manufactureDate,expiryDate,Category,email,chemistemail})
               
       
         
        
        
        res.status(200).json({
            success:true,
            
            message:"entry created successfully"
        })
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:"entry not created successfully"
        })
    }
}
exports.showAll = async(req,res)=>{
    try{
        const allUser = await Todo.find({})
        
      res.send({status:"ok" ,data:allUser})
      console.log(allUser)

    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:"error"
        })
    }
}
exports.showUser = async(req,res)=>{
    try{
        const{email} = req.body;
        
        const allUser = await Todo.find({email:email})
        
        res.send({status:"ok" ,data:allUser})
        
    }
    catch(err){

    }
}
exports.showChemist = async(req,res)=>{
    try{
        const{chemistemail} = req.body;
        
        const allUser = await Todo.find({chemistemail:chemistemail})
        
        res.send({status:"ok" ,data:allUser})
        
    }
    catch(err){

    }
}
exports.edit = async(req,res)=>{
    const{id,email} = req.body;
    
    
    const de = await Todo.findByIdAndDelete(id);
    console.log(de)
    res.send({success:true,data:de})
    let transporter = await nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
        
    });
    let info = await transporter.sendMail({
       from:'Med',
      to:email,
      subject:"Accept Medicine",
      html:`<h1>hello <h1></br> Your Request has been Accepted by Chemist`
    })
    
}
exports.decline = async(req,res)=>{
    const{id,email} = req.body;
    
    
    const de = await Todo.findByIdAndDelete(id);
    console.log(de)
    res.send({success:true,data:de})
    let transporter = await nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
        
    });
    let info = await transporter.sendMail({
       from:'Med',
      to:email,
      subject:"Reject Medicine",
      html:`<h1>hello <h1></br> Your Request has Not been Accepted by Chemist`
    })
    
}



