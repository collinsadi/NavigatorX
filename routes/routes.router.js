const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();




// router.get("/", (request, response)=>{
//     response.render("index")
// })
// router.get("/chat", (request, response)=>{
//     response.render("index")
// })


router.get("/starter", (request, response)=>{
    response.json({message:"Server Started"})
})
// router.get("/prompt",messageController.newMessage2)

router.post("/message/new", messageController.newMessage)













module.exports = router