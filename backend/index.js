const express = require("express");
const cors = require("cors");
const app = express(); 
require('dotenv').config();

const mongoose = require("mongoose");

const khan = require("./routes/user");


app.use(cors());
app.use(express.json());



app.use('/submit',khan);



app.get("/", (req,res)=>{
res.send("yes bhai")
})

mongoose.connect("mongodb+srv://root:root@cluster0.k3zjw.mongodb.net/yasir").then(()=>{
    console.log("connected")
}).catch(err=>{
    console.log(`db error ${err.message}`);
})



app.listen(5000,(req,res)=>{

console.log("ho gay arun")

});