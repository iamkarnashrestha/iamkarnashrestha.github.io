/**
 * homePageRoutes.js
 */
 "use strict";
 const express=require("express");
 const path=require("path");
 
 const homePageRouter=express.Router();
 
 //Define homepage routes
 
 homePageRouter.get("/",(req,res)=>{
     //(curentdirectory,pathtodirectoryforfile,filename)
     res.sendFile(path.join(__dirname,"../../views","index.html"))
 });
 
 homePageRouter.get("/home",(req,res)=>{
     //(curentdirectory,pathtodirectoryforfile,filename)
     res.sendFile(path.join(__dirname,"../../views","index.html"))
 });
 
 homePageRouter.get("/minibank/home",(req,res)=>{
     //(curentdirectory,pathtodirectoryforfile,filename)
     res.sendFile(path.join(__dirname,"../../views","index.html"))
 });
 
 
 
 
 module.exports=homePageRouter;
 