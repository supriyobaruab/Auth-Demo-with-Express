const newuserSchema = require('../schema/newuserSchema');
const checkUser = async(req,res,next)=>{
    try {
        const {email,password} = req.body;
        const find = await newuserSchema.findOne({email});
        if(!find){
            return res.render('login',{errora : "No account found",errorp :""});
        }
        if(password!=find.password){
            return res.render("login", {errora:"",errorp: "Wrong username or password" })
        }
        next();
    }catch(error) {
        next(error);
    }      
}
module.exports = checkUser;