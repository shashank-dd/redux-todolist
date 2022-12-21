const express=require("express")
route=express.Router();
const data=require("../models/data.js")
route.use(express.json())
const cloudinary=require("cloudinary").v2
const  fileupload= require("express-fileupload")
const bodyParser = require("body-parser");
route.use(bodyParser.urlencoded())
route.use(bodyParser.json())

route.use(fileupload({
    useTempFiles:true,
    limits:{fileSize :50*2024*1024}
}))

cloudinary.config({ 
    cloud_name: 'dzzixdcs1', 
    api_key: '961216453729524', 
    api_secret: 'uUbIi8ygFiiVwJJeuq8aXRqO2kk' 
  });

route.post("/post",async(req,res)=>{
    try {
console.log(req.body)

        // const file=req.files.image;
        // const result =await cloudinary.uploader.upload(file.tempFilePath,{
        //     public_id:`${Date.now()}`,
        //     resource_type:"auto",
        //     folder:"images"
        //    })
        // const dat=await data.create({
        //     name :         req.body.name,
        //     propertytype :           req.body.propertytype,
        //     negotable:         req.body.negotable,
        //     price:        req.body.price,
        //     ownership:         req.body.ownership,
        //     propertyage:          req.body.propertyage,
        //     propertyapproved:          req.body.propertyapproved,
        //     propertydescription:           req.body.propertydescription,
        //     bankloan:          req.body.bankloan,
        //     length:           req.body.length,
        //     breadth:            req.body.breadth,
        //     totalarea:        req.body.totalarea,
        //     areaunit:        req.body.areaunit,
        //     noofbhk:         req.body.noofbhk,
        //     nooffloors:      req.body.nooffloors,
        //     attached:        req.body.attached,
        //     westerntoilet:      req.body.westerntoilet,
        //     furnished:             req.body.furnished,
        //     carparking:      req.body.carparking,
        //     lift:      req.body.lift,
        //     electricity:        req.body.electricity,
        //     facing:          req.body.facing,
        //     name:       req.body.name,
        //     mobile:            req.body.mobile,
        //     postedby:        req.body.postedby,
        //     saletype:           req.body.saletype,
        //     featuredpackage:            req.body.featuredpackage,
        //     ppdpackage:        req.body.ppdpackage,
        //     image:            result.url,
        //     email:          req.body.email,
        //     city :            req.body.city,
        //     area:         req.body.area,
        //     pincode:        req.body.pincode,
        //     address:          req.body.address,
        //     landmark:             req.body.landmark,
        //     latitude:              req.body.latitude,
        //     longitude:                req.body.longitude,
        //   }) 
        res.json({
            ok:"data",
            data:dat

        })
    } catch (error) {
        res.json({
            err:e.message
        })
    }
   
})
 module.exports= route;