const express   = require('express');
const router    = express.Router();
const getRoutes = require('./controllers/getRoute');
const getLogin  = require('./controllers/getLogin');

router.get('/',getRoutes);
router.get('/login',getLogin);

module.exports = router;