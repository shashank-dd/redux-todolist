const express=require("express");
const app=express();
const dotenv=require("dotenv").config()
const port=process.env.PORT || 8080
app.use(express.json());
app.get("/",(req,res)=>{
    res.json({
        ok:"Ok"
    })
})
app.listen(port,()=>{
    console.log(`server started at port  ${port}   `)
})