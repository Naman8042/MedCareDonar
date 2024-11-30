const Data = require("../models/signup")

exports.Signup = async (req, res) => {
    try {
        const { name, email, phoneNumber, password } = req.body;
        console.log(name, email, phoneNumber, password)
        
        const find = await Data.findOne({ email })

        if (find) {
            return res.status(400).json({
                success: false,
                message: "user already registered"
            })
        }

        const response = await Data.create({ name, email, phoneNumber, password })




        return res.status(200).json({
            success: true,
            data: response,
            message: "entry created successfully"
        })
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({
            success: false,
            message: "entry not created successfully"
        })
    }
}
exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)
        const find = await Data.findOne({ email })
        if (!find) {
            return res.send({
                // success:false,
                message: "user not registered"
            })
        }
        if (find.password !== password) {
            res.status(200).json({
                // success:false,

                message: "wrong password"
            })
        }

        if (find.password === password) {
            res.status(200).json({
                success: true,
                data: "user",
                email: email,
                message: "entry created successfully"
            })
        }




        // res.status(200).json({
        //     success:true,
        //     data:response,
        //     message:"entry created successfully"
        // })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            // success:false,
            message: "entry not created successfully"
        })
    }
}