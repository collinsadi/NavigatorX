const badwords = require("../badwords/badwords");
const trainModel = require("../training/navigatorX");



const messageController = {

    newMessage: async (request, response) => {
    
        const message = request.body.message;

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
            } else if (botResponse.score < 0.7) {
                responseMessage = "I didn't get that. Can you please add more context to where you'd love to get directions to?";
            } else {
                responseMessage = botResponse.answer;
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
    },
    newMessage2: async (request, response) => {
    
        const message = request.query.message;

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
            } else if (botResponse.score < 0.7) {
                responseMessage = "I didn't get that. Can you please add more context to where you'd love to get directions to?";
            } else {
                responseMessage = botResponse.answer;
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
    },
};

module.exports = messageController;
