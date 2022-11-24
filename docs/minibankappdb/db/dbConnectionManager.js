/**
 * dbConnectionManager.js
 */

 "use strict";
 const mysql=require("mysql2");
 const dBConfig=require("./dbConfig");
 const dbConnectionManager=(function(dbConfig){
     const getConnection=function(){
         /**
          * Makes and returns a Database Connection pool using the 
          */
         return mysql.createPool(dBConfig);
 
     }
     return {
         getConnection:getConnection
     }
 })();
 
 module.exports=dbConnectionManager;
 