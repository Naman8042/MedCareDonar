const express = require("express")
const cors = require("cors")
const app = express();

require("dotenv").config()
const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

const todoroutes = require("./routes/medicines")
app.use("/api/v1", todoroutes)

app.listen(PORT,()=>{
    console.log("server started")
})

const dbconnect = require("./config/database")
dbconnect()