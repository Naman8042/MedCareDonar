const Todo = require("../models/Owner")

exports.create = async(req,res)=>{
    try{
        const {Name,email} = req.body;
        const response = await Todo.create({Name,email})
       
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