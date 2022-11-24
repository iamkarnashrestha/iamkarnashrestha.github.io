"use strict";
 const express=require("express");
 const path=require("path");
 const accountController=require("../../controller/accountController");
 const accountRouter=express.Router();
 
 //Define account routes
 
 accountRouter.get("/account-form",(req,res)=>{
     //(curentdirectory,pathtodirectoryforfile,filename)
     const accounts=accountController.getAccounts();
     console.log(accounts);
     res.render("account/account",{accounts:accounts})
   
 });
 
 accountRouter.post("/create-account",(req,res)=>{
     accountController.addNewaccount(req,res);
     res.redirect(303,"account-form");
 });
 
 module.exports=accountRouter;