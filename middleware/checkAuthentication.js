const jwt = require('jsonwebtoken');
function checkAuthentication(req,res,next){
    try {
        // console.log("Entered checkauthentication");
        const secure = process.env.JWT_SECURE; 
        const token = req.cookies.token;
        if(!token){
            return res.redirect('/login');
        }
        const decode = jwt.verify(token,secure);
        req.user = decode;
        next();
    } catch (error) {
        if(error.message === "jwt expired"){
        console.log('Token expired');
        return res.redirect('/login');
        }
        next(error);
    }
}
module.exports = checkAuthentication;