const express = require("express");
const messageController = require("../controllers/messageController");
const promptController = require("../controllers/promptController");
const router = express.Router();
require("dotenv").config();



const authMiddleware = (req, res, next) => {
    const secret = process.env.SECRET;

    // Check if Authorization header exists
    if (!req.headers.authorization) {
        return res.status(401).json({ status:false, message: 'Unauthorized - Missing Authorization header' });
    }

    // Extract the token from the Authorization header
    const token = req.headers.authorization.replace('Bearer ', '');

    // Check if the token matches the SECRET environment variable
    if (token !== secret) {
        return res.status(401).json({status:false, message: 'Unauthorized - Invalid token' });
    }

    // Authorization successful, proceed to the next middleware or route handler
    next();
};

router.get("/starter", (request, response)=>{
    response.json({message:"Server Started"})
})
// router.get("/prompt",messageController.newMessage2)

router.post("/message/new", messageController.newMessage)
router.get("/prompt/get/resolved",authMiddleware, promptController.getResolvedPrompts);
router.get("/prompt/get/unresolved",authMiddleware, promptController.getUnresolvedPrompts);
router.post("/prompt/edit/resolve",authMiddleware, promptController.resolvePrompt);
router.post("/prompt/edit/unresolve",authMiddleware, promptController.unresolvePrompt);
router.post("/prompt/block/ip",authMiddleware, promptController.blockPromptIp);
router.post("/prompt/analytics",authMiddleware, promptController.promptStatistics);
router.post("/prompt/management/login",authMiddleware, promptController.login);
router.post("/prompt/delete",authMiddleware, promptController.deletePrompt);













module.exports = router