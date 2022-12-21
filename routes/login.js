const express=require("express")
route=express.Router();
route.use(express.json())
route.use("/",(req,res)=>{
    res.json({
        ok:"login"
    })
})
 module.exports= route;