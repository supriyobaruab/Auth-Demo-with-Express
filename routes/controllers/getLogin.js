const getLogin = (req,res)=>{
    if(req.cookies.token){
        return res.redirect('/');
    }
    res.render('login');
}
module.exports = getLogin;