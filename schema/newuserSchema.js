const mongoose    = require('mongoose');
const newuserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique   : true
    },
    password :{
        type : String,
        required : true
    }
});
const signUser = mongoose.model("newUser",newuserSchema);
module.exports = signUser;