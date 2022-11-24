/**
 * accountDAO.js
 */
 "use strict";

 const Account = require("../model/account");
 const accountDAO = (function () {
     const accountsData = [
         new Account(1, "01-980-0001", "James H. Karvill", "Saving"),
         new Account(2, "01-980-0002", "Jack Will", "Checking"),
         new Account(3, "01-980-0003", "Tim Carry", "Loan")
     ];
     const getAccounts = function () {
         return accountsData;
     }
 
     const saveAccount = function (account) {
         accountsData.push(account);
     }
 
     return {
         getAccounts: getAccounts,
         saveAccount:saveAccount
     }
 
 
 })();
 
 module.exports = accountDAO;