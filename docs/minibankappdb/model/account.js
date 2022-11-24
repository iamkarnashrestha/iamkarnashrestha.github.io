/**
 * account.js
 */
"use strict";
function account(accountId, accountNo, customerName,accType){
    this.accountId=accountId;
    this.accountNo=accountNo;
    this.customerName=customerName;
    this.accType=accType;
}

module.exports=account;