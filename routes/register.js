const express=require("express")
const login=require("../models/login")
route=express.Router();
route.use(express.json())
route.get("/",(req,res)=>{
    try {
        res.json({
            ok:"register"
        })
    } catch (e) {
        res.json({
            err:e.message
        })
    }
   
})



 module.exports= route;