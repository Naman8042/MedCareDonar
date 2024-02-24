const Data = require("../models/Chemist")

exports.Signupchemist = async(req,res)=>{
    try{
        const { name,email,shopname,phoneNumber,password,Address,time} = req.body;
        
       const find = await Data.findOne({email})
       if(find){
        return res.status(400).json({
            success:false,
            message:"user already registered"
        })
       }
       
        const response = await Data.create({ name,email,shopname,phoneNumber,password,Address,time})
       
         
        
        
        res.status(200).json({
            success:true,
            data:response,
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
exports.Allchemist = async(req,res)=>{
    try{
        const allUser = await Data.find({})
        
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
exports.Loginchemist = async(req,res)=>{
    try{
        const { email,password} = req.body;
        console.log(email,password)
       const find = await Data.findOne({email})
       if(!find){
        return res.send({
            // success:false,
            message:"user not registered"
        })
       }
       if(find.password!==password ){
        res.status(200).json({
            // success:false,
            data:"chemist",
            message:"entry created successfully"
        })
    }
       
        if(find.password===password){
            res.status(200).json({
                success:true,
                data:"chemist",
                email:email,
                message:"entry created successfully"
            })
        }
       
         
        
        
        // res.status(200).json({
        //     success:true,
        //     data:response,
        //     message:"entry created successfully"
        // })
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            // success:false,
            message:"entry not created successfully"
        })
    }
}