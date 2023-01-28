const mongoose = require('mongoose');
const dataschema = new mongoose.Schema({
    todo :{type:String,required:true},
     })
const data = mongoose.model('todos', dataschema);
module.exports = data;



