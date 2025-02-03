require("dotenv").config();
const express = require("express");
const connectDB= require("./database/connectDB")


const PORT = 8000;


// Initiate express
const app = express();

// middleware to parse json 
app.use(express());

connectDB();


// Basic Route
app.get("/",(req,res)=>{
    res.json({message:"Welcome to Our API"});
});


app.listen(process.env.PORT || PORT, ()=>{
    console.log("Server is listening.....");
    
});




