const mongoose = require("mongoose")


const notesSchema = new mongoose.Schema({
    id:{type:String,required:true},
    title:{type:String,required:true},
    content:{type:String,required:true},
    category:{type:String,required:true},
    createdAt:{type:String,required:true}
})