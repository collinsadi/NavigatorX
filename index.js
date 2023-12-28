const express = require("express")
const app = express()
const routes = require("./routes/routes.router")
const cors = require("cors")
const cron = require("node-cron");
const axios = require("axios");
require("dotenv").config();
const uri = process.env.MONGO_URI;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors({
    origin:"https://rsux.netlify.app"
}))
app.use(routes)



app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server Started on Port 5000")
})