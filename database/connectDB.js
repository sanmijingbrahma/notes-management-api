const mongoose = require("mongoose");
const DB_NAME = require("../constants");


const connectDB = async ()=>{
    try {
        const connectionInnstace = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Database Connection establihed!");
        
    } catch (err) {
        console.log("Database connection failed!");
        process.exit(1);
    }
}

module.exports = connectDB;