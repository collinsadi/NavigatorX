const badwords = require("../badwords/badwords");
const trainModel = require("../training/navigatorX");



const messageController = {

    newMessage: async (request, response)=>{
    
        const message = request.body.message

        // badwords.forEach(badword=>{
        //     if(message.includes(badword)){
        //     response.status(400).json({status:true, message:"Query Received", response:"You Prompt Contains a Badword"})
        //     return
        //     }

            
        // })

       try{

        const botResponse = await trainModel(message)
        let responseMessage = "NIce One"

        if(botResponse.intent === "None"){
            responseMessage = "I Didn't Get That Can You Please Rephrase"
        }else if(botResponse.score < 0.7){

            responseMessage = "I Didn't Get That Can You Please Add more Context to Where You'll Love to get Directions to?"
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