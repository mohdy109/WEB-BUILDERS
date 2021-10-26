
const mongoose = require("mongoose")

const yasir  = new mongoose.Schema({

name:{
    type:String,
required:true},
email:{
    type:String,
    required:true
},
contact:{
    type:Number,
    required:true,
},
message:{
    type:String,
    required:true
}



})


module.exports = mongoose.model("form",yasir);;

