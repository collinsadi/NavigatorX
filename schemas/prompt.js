const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const promptSchema = new Schema({

    prompt:String,
    response:String,
    resolved:{
        type:Boolean,
        default:false
    },
    important:{
        type:Boolean,
        default:false
    },
    ipAddress:String,
    critical:Boolean,
    highlyCritical:Boolean

},{timestamps:true});

const Prompt = mongoose.model("prompt", promptSchema);

module.exports = Prompt;