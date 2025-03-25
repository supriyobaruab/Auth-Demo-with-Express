/*
 * Demo authentication with jsonwebtoken
 * Date created : March 24,03,2025
 */
// Dependencies
const express   = require('express');
const mongoose  = require('mongoose');
const cookie    = require('cookie-parser');
const env       = require('dotenv');
// import
const commonRoutes         = require('./routes/commonRoutes');
const app = express();
//Config
env.config();
app.set('view engine','ejs');
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//routes
app.use('/',commonRoutes);
//Database connect
const database = async()=>{
    try {
        const mgdb = process.env.DATABASE_PORT;
        await mongoose.connect(mgdb);
        console.log('\x1b[31m[Database connected]\x1b[0m');
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
//Start server
const server_port = process.env.SERVER_PORT;
app.listen(server_port,()=>{
    try {
        console.log(`\x1b[31m[Server running at ${server_port}]\x1b[0m`);
    } catch (error) {
        console.log(error.message);
    }
});

