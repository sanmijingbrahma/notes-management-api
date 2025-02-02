require("dotenv").config();
const express = require("express");


// Initiate express
const app = express();

// middleware to parse json 
app.use(express());


// Basic Route
app.get("/",(req,res)=>{
    res.json({message:"Welcome to Our API"});
});


app.listen(process.env.PORT || PORT, ()=>{
    console.log("Server is listening.....");
    
});




