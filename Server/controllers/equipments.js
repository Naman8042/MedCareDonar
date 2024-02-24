const Todo = require("../models/Equipments")

exports.donateEquipments = async(req,res)=>{
    try{
        const {donarName,mobileNumber,
            address,
            pinCode,
            equipmentName, brandName, Description,email} = req.body;
        
       
            
           
            const response = await Todo.create({donarName,mobileNumber,
                address,
                pinCode,
                equipmentName, brandName, Description,email})
               
                console.log(response)
         
        
        
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
exports.showAllequip = async(req,res)=>{
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