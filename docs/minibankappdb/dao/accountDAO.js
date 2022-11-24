/**
 * accountDAO.js
 */
 "use strict";
 const dbConnectionManager=require("../db/dbConnectionManager");
 const Account = require("../model/account");
 const accountDAO = (function () {
  
     const getAccounts = async function () {
        const qryStrGetAccounts="SELECT * from `account`.accounts";
        try{
           const dbConnection=dbConnectionManager.getConnection();
           //query is the command to query in database
           const [accounts]=await dbConnection.promise().query(qryStrGetAccounts);
           return accounts;
        }catch(error){
           console.log(`Database Access Error:${error}`);
           throw error;
        }
     }
 
     const saveAccount = async function (account) {
        const cmdStrSaveAccount=`Insert into accounts(accountNo,customerName,accType) values('${account.accountNo}','${account.customerName}','${account.accType}')`;
        console.log(cmdStrSaveAccount);
        try{
            const dbConnection=dbConnectionManager.getConnection(); 
            const saveOpResult=await dbConnection.promise().execute(cmdStrSaveAccount);
            return saveOpResult;
        }
        catch(error){
            console.log(`Database Access Error:${error}`);
            throw error;
        }

        accountsData.push(account);
     }
 
     return {
         getAccounts: getAccounts,
         saveAccount:saveAccount
     }
 
 
 })();
 
 module.exports = accountDAO;