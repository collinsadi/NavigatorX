const Ip = require("../schemas/ip");
const Prompt = require("../schemas/prompt");


const promptController = {

    resolvePrompt: async (request, response)=>{
        
        const promptId = request.body.id;
        console.log(request.body);

        try{

                if(!promptId){
                    return response.status(422).json({status:false, message:"Prompt Identifier Missing"})
                }

                const prompt = await Prompt.findById(promptId);

                if(!prompt){
                    return response.status(404).json({status:false, message:" Prompt was Not Found"});
                }

                prompt.resolved = true;

                await prompt.save()

                response.status(200).json({status:true, message:"Prompt Resolved"});

        }catch(error){
            console.log(error)
            response.status(500).json({status:false, message:"Internal Server Error"})
        }

        


    },
    getResolvedPrompts: async (request, response)=>{

        try{

            const prompts = await Prompt.find({resolved:true});

            response.status(200).json({status:true, prompts});

        }catch(error){
            console.log(error)
            response.status(500).json({status:false, message:"Internal Server Error"})
        }
    },
    unresolvePrompt:  async (request, response)=>{
        
        const promptId = request.body.id;

        try{

                if(!promptId){
                    return response.status(422).json({status:false, message:"Prompt Identifier Missing"})
                }

                const prompt = await Prompt.findById(promptId);

                if(!prompt){
                    return response.status(404).json({status:false, message:" Prompt was Not Found"});
                }

                prompt.resolved = false;

                await prompt.save()

                response.status(200).json({status:true, message:"Prompt Resolve Reversed"});

        }catch(error){
            console.log(error)
            response.status(500).json({status:false, message:"Internal Server Error"})
        }

        


    },
    getUnresolvedPrompts: async (request, response)=>{

        try{

            const prompts = await Prompt.find({resolved:false});

            response.status(200).json({status:true, prompts});

        }catch(error){
            console.log(error)
            response.status(500).json({status:false, message:"Internal Server Error"})
        }
    },
    getHighlyCriticalPrompts: async (request, response)=>{

        try{

            const prompts = await Prompt.find({highlyCritical:true, resolved:false});

            response.status(200).json({status:true, prompts});

        }catch(error){
            console.log(error)
            response.status(500).json({status:false, message:"Internal Server Error"})
        }
    },
    deletePrompt: async (request, response)=>{

        const promptId = request.body.id;

        try{

            if(!promptId){
                return response.status(422).json({status:false, message:"Prompt Identifier Missing"})
            }

            const prompt = await Prompt.findById(promptId);

            if(!prompt){
                return response.status(404).json({status:false, message:" Prompt was Not Found"});
            }

           await Prompt.findByIdAndDelete(promptId);

           response.status(200).json({status:true, message:"Prompt Deleted Sucessfully"})

        }catch(error){
            console.log(error)
            response.status(500).json({status:false, message:"Internal Server Error"})
        }

    },
    deleteResolvedPrompts: async (request, response)=>{

        try{

            await Prompt.deleteMany({resolved:true})

            response.status(200).json({status:true, message:"Resolved Prompts Deleted"})

        }catch(error){
            console.log(error);
            response.status(500).json({status:false, message:"Internal Server Error"})
        }
    },
    promptStatistics: async (request, response)=>{

        try{

        const promptsCount = (await Prompt.find()).length;
        const resolvedPromptsCount = (await Prompt.find({resolved:true})).length;
        const unresolvedPromptsCount = (await Prompt.find({resolved:false})).length;
        const highlyCriticalPrompts = (await Prompt.find({highlyCritical:true})).length;

        response.status(200).json({status:true, promptsCount, resolvedPromptsCount, unresolvedPromptsCount, highlyCriticalPrompts})


        }catch(error){
            console.log(error);
            response.status(500).json({status:false, message:"Internal Server Error"})
        }
    },
    blockPromptIp: async (request, response)=>{
        const promptId = request.body.id;

        try{

            if(!promptId){
                return response.status(422).json({status:false, message:"Prompt Identifier Missing"})
            }

            const prompt = await Prompt.findById(promptId);

            if(!prompt){
                return response.status(404).json({status:false, message:" Prompt was Not Found"});
            }

           await Ip.create({ipAddress:prompt.ipAddress});

           response.status(200).json({status:true, message:"IP Address Blocked"})

        }catch(error){
            console.log(error)
            response.status(500).json({status:false, message:"Internal Server Error"})
        }
    }

}


module.exports = promptController;