const express = require("express");
const app = express();
const routes = require("./routes/routes.router");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URI;


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors({
    origin:["https://navigatorx.com.ng"]
}))
// app.use(cors())
app.use(routes)



mongoose.connect(uri)
.then(()=> {
    console.log("MongoDB Database Connected!!!")

    app.listen(process.env.PORT || 5000, ()=>{
        console.log("Server Started on Port 5000")
    })
})
.catch(error=> console.log(error));
