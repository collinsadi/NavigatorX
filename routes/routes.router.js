const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();




router.get("/", (request, response)=>{
    response.render("index")
})


router.post("/message/new", messageController.newMessage)













module.exports = router