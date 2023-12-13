const trainModel = require("../training/navigatorX");



const messageController = {

    newMessage: async (request, response)=>{
    
        const message = request.body.message

       try{

        const botResponse = await trainModel(message)
        let responseMessage = "NIce One"

        if(botResponse.intent === "None" && botResponse.score === 1){
            responseMessage = "I Didn't Get That Can You Please Rephrase"
        }else{

            responseMessage = botResponse.answer
        }
        console.log(botResponse)

        response.status(200).json({status:true, message:"Query Received", response:responseMessage})


       }catch(error){
        console.log(error)
        response.status(500).json({status:false, message:"Internal Server Error"})
       }
        

    }


}


module.exports = messageController;