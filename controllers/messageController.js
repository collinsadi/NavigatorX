const badwords = require("../badwords/badwords");
const Ip = require("../schemas/ip");
const Prompt = require("../schemas/prompt");
const trainModel = require("../training/navigatorX");



const messageController = {

    newMessage: async (request, response) => {
    
        const {message,ip} = request.body;

        const ipIsBlocked = await Ip.findOne({ipAddress:ip});

        if(ipIsBlocked){
            return response.status(400).json({
                status: true,
                message: "Query Received",
                response: "You Have Been Blocked from Using NavigatorX"
            });
        }

        // for (const badword of badwords) {
        //     if (message.includes(badword)) {
        //         return response.status(400).json({
        //             status: true,
        //             message: "Query Received",
        //             response: "Your prompt contains a bad word"
        //         });
        //     }
        // }

        try {
            const botResponse = await trainModel(message);
            let responseMessage = "";

            if (botResponse.intent === "None") {
                responseMessage = "I didn't get that. Can you please rephrase?";

                await Prompt.create({prompt:message, response:responseMessage,ipAddress:ip,highlyCritical:true})

            } else if (botResponse.score < 0.7) {
                responseMessage = "I didn't get that. Can you please add more context to where you'd love to get directions to?";

                await Prompt.create({prompt:message, response:responseMessage,ipAddress:ip,critical:true})
            } else {
                responseMessage = botResponse.answer;

                await Prompt.create({prompt:message, response:responseMessage,ipAddress:ip})
            }

            console.log(botResponse);

            return response.status(200).json({
                status: true,
                message: "Query Received",
                response: responseMessage
            });
        } catch (error) {
            console.error(error);
            return response.status(500).json({
                status: false,
                message: "Internal Server Error"
            });
        }
    }
};

module.exports = messageController;
