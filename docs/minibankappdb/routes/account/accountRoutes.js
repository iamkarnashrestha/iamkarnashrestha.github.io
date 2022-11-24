"use strict";
 const express=require("express");
 const path=require("path");
 const accountController=require("../../controller/accountController");
 const accountRouter=express.Router();
 
 //Define account routes
 
 accountRouter.get("/account-form",async(req,res)=>{
     const accounts=await accountController.getAccounts(); 
     res.render("account/account",{accounts:accounts})
    
 });
 
 accountRouter.post("/create-account",async(req,res)=>{
     await accountController.addNewaccount(req,res);
     res.redirect(303,"account-form");
 });
 
 module.exports=accountRouter;