const express=require("express")

let bodyParser = require('body-parser')
const login=require("../models/login")


route=express.Router();
route.use(bodyParser.json())
route.use(express.json())
route.post('/register',async (req,res)=>{
    try{
       console.log(req.body)
        
    let user = await login.findOne({email:req.body.email})
    console.log(user,1)
    if(user){
       return  res.status(409).json({
            status:'failure',
            message:'user already exists with the given email'
        })
    }
    console.log("ppppp")
    // bcrypt.hash(password,10,async function(err,hash){
    //     if(err){
    //         return res.status(500).json({
            
    //             status:'failed',
    //             message:err.message
    //         })
    //     }
    console.log("going")
    const use = await login.create({
        
        email:req.body.email,
        password:req.body.password
    });
    
    res.json({
        status:'sucesss',
        message:use})
    
    }
    catch(e){
        res.json({
            status:'failure',
            message:e.message
        })
    }

 })



 module.exports= route;