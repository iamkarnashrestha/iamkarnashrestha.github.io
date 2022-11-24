/***
 * index.js
 * @author:Karna
 */
"use strict";
console.log("Hello Minibank webapp");

const express=require("express");
const path=require("path");
const app=express();
const PORT_NUMBER=3000;


const hompPageRoutes=require("./routes/public/homePageRoutes");
const accountRoutes=require("./routes/account/accountRoutes")

app.use("/static",express.static(path.join(__dirname,"public")));

//**Define Middlewares */
app.set("views", path.join(__dirname,"views"));
app.set("view engine","pug");

//Parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended:false}));

app.use("",hompPageRoutes);
app.use("/account",accountRoutes);



app.listen(PORT_NUMBER,()=>{
console.log(`Server started at port:${PORT_NUMBER}`);
});