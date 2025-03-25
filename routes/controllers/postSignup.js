const newuserSchema = require('../../schema/newuserSchema');
const postSignup = async(req,res)=>{
    try{
    const {name,email,password} = req.body;
    console.log(req.body);
    if(!name || !email || !password){
        return res.json({"message" : "All the field must be filled"});
    }
    const signUser = new newuserSchema({
        name,email,password
    });
    await signUser.save();
    res.redirect('/');
    }catch(error){
        if (error.code === 11000) {
        return res.status(409).json({ error: 'Email already exists' });
    }
    }
}
module.exports = postSignup;