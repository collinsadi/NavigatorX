const express = require("express")
const app = express()
const routes = require("./routes/routes.router")
const cors = require("cors")
const cron = require("node-cron");
const axios = require("axios")

// cron to keep server online (runs every 5 minutes)
// cron.schedule("*/10 * * * *", () => {
//     try {
//       axios.get("https://rsunx.onrender.com/starter");
//       axios.get("https://nxtbot.onrender.com/generate");
//     } catch (e) {
//       console.log(e.message);
//     }
//   });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:"10mb"}))

app.use(cors({
    origin:"https://rsuchat.netlify.app"
}))
app.use(routes)



app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server Started on Port 5000")
})