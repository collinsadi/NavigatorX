const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ipSchema = new Schema({

    ipAddress:String

},{timestamps:true});

const Ip = mongoose.model("ip", ipSchema);

module.exports = Ip;