const express     = require('express');
const router      = express.Router();
const getRoutes   = require('./controllers/getRoute');
const getLogin    = require('./controllers/getLogin');
const getSignup   = require('./controllers/getSignup');
const postLogin   = require('./controllers/postLogin');
const postSignup  = require('./controllers/postSignup');
const createToken          = require('../middleware/createToken');
const checkAuthentication  = require('../middleware/checkAuthentication');
const checkUser            = require('../middleware/checkUser');

router.get('/',checkAuthentication,getRoutes);
router.get('/login',getLogin);
router.get('/signup',getSignup);
router.post('/login',checkUser,createToken,postLogin);
router.post('/signup',postSignup);
module.exports = router;