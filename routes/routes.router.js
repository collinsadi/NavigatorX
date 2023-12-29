const express = require("express");
const messageController = require("../controllers/messageController");
const promptController = require("../controllers/promptController");
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
router.get("/prompt/get/resolved", promptController.getResolvedPrompts);
router.get("/prompt/get/unresolved", promptController.getUnresolvedPrompts);
router.post("/prompt/edit/resolve", promptController.resolvePrompt);
router.post("/prompt/edit/unresolve", promptController.unresolvePrompt);
router.post("/prompt/block/ip", promptController.blockPromptIp);













module.exports = router