const express = require("express")
const app = express()
const routes = require("./routes/routes.router")
const cors = require("cors")



app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:"10mb"}))

app.use(routes)
app.use(cors())




app.listen(5000, ()=>{
    console.log("Server Started on Port 5000")
})