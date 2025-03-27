const getLogin = (req,res)=>{
    res.render('login',{
        errora : "",
        errorp : "",
    });
}
module.exports = getLogin;