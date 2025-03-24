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


