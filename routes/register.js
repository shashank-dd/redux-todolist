const express=require("express")
//let {body,validationResult} = require('express-validator')
let bodyParser = require('body-parser')
let bcrypt = require('bcrypt')
const  hash  = require('bcrypt');
const login=require("../models/login")

route.use(bodyParser.json())
route=express.Router();
route.use(express.json())
route.post('/register',async (request,response)=>{
    try{
       console.log(request.body)
        let {email,password} = request.body;
    let user = await login.findOne({email})
    console.log(user,1)
    if(user){
        response.status(409).json({
            status:'failure',
            message:'user already exists with the given email'
        })
    }
    bcrypt.hash(password,10,async function(err,hash){
        if(err){
            return response.status(500).json({
                status:'failed',
                message:err.message
            })
        }
    
    user = await login.create({
        
        email:email,
        password:hash
    });
    
    response.json({
        status:'sucesss',
        message:'user successfully created',
        user
    })
    });
    }
    catch(e){
        response.json({
            status:'failure',
            message:e.message
        })
    }

 })



 module.exports= route;