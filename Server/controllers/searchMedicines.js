const Todo = require("../models/medicines")

exports.searchMedicines = async(req,res)=>{
    try{
        
        // const {name} = req.body
        const response = await Todo.findOne(req.params.name)
        // res.status(200).json({
        //     success:true,
        //     data:response,
        //     message:"entry created successfully"
        // })
        
        res.send({status:"ok","data":response})
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message:"entry not created successfully"
        })
    }
}