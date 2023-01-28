const express=require("express")
const route=express.Router();
const cors = require("cors");

route.use(cors({
    origin: "*",
}))
const data=require("../models/data.js")
// route.use(express.json())

const bodyParser = require("body-parser");
route.use(express.json())
route.use(bodyParser.urlencoded())
route.use(bodyParser.json())
route.get("/get",async(req,res)=>{
    try {
        console.log("coming to get")

        console.log("rout comming")
   
        const dat=await data.find() 
        res.json({
            ok:"ok",
            data:dat

        })
    } catch (e) {
        res.json({
            err:e.message
        })
    }
   
})
route.delete("/delete",async(req,res)=>{
    try {
        console.log("codddde")

        console.log(req.body.id)
   
        const dat=await data.deleteOne({_id:req.body.id}) 
        res.json({
            ok:"ok",
            data:dat

        })
    } catch (e) {
        res.json({
            err:e.message
        })
    }
   
})

route.put("/put",async(req,res)=>{
    try {
        console.log("codddde")

        console.log(req.body.id)
   
        const dat=await data.updateOne({_id:req.body.id},{todo:req.body.todo}) 
        res.json({
            ok:"ok",
            data:dat

        })
    } catch (e) {
        res.json({
            err:e.message
        })
    }
   
})
route.post("/post",async(req,res)=>{
    try {
        console.log("coming")
console.log(req.body)
        console.log("rout comming")
   
        const dat=await data.create({
            todo :   req.body.todo,
           
         
          }) 
        res.json({
            ok:"ok",
            data:dat

        })
    } catch (e) {
        res.json({
            err:e.message
        })
    }
   
})












 module.exports= route;