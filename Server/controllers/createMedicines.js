const Todo = require("../models/medicines")

exports.createMedicines = async(req,res)=>{
    try{
        const {name,genericname,Uses,incridents} = req.body;
        const response = await Todo.create({name,genericname,Uses,incridents})
       
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