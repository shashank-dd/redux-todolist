const express=require("express")
const login =require("../models/login.js")
route=express.Router();
route.use(express.json())

 const secret="ghg"


const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

route.post('/login',async (req,res)=>{
    try{
       console.log(req.body)
        
    let user = await login.findOne({email:req.body.email})
    console.log(user,1)
    if(!user){
       return  res.status(409).json({
            status:'failure',
            message:'user dont exist plss singup'
        })
    }
    console.log("ppppp")

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: user.email
      }, secret);


     res.json({
        status: "Success",
        message: "Login Succesful",
        token:token
    })
    
   
 } catch(e){
     res.status(401).json({
        status: "Failed",
        message: e.message
    })
    }

 })




module.exports = route;