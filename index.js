/*
 * Demo authentication with jsonwebtoken
 * Date created : March 24,03,2025
 */
// Dependencies
const express   = require('express');
const mongoose  = require('mongoose');
const cookie    = require('cookie-parser');
const env       = require('dotenv');
const jwt       = require('jsonwebtoken');
// import

//Config
const app = express();
app.set('view engine','ejs');
app.use(cookie());
app.use(express.json());
app.use(express)
app.use(express.urlencoded({extended: true}));
env.config();
//routes

//Database connect
const database = async()=>{
    try {
        const mgdb = process.env.DATABASE_PORT;
        await mongoose.connect(mgdb);
        console.log("Database connected");
    } catch (error) {
        console.log(error.message);
    }
}
database();
// Default error handler
app.use((error,req,res,next)=>{
    const statusCode = error.statusCode || 500;
    const message    = error.message    || "Serverside error";
    res.json({
        "error"   : statusCode,
        "message" : message
    });
});

