
const mongoose = require('mongoose');

const loginschema = new mongoose.Schema({
    email :{type:String,required:true},
    password:{type:String,required:true}


})

const login = mongoose.model('login', loginschema);

module.exports = login;