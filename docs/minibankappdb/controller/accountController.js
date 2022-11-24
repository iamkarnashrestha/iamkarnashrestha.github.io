"use strict";
const accountDAO = require("../dao/accountDAO");
const Account = require("../model/account");

const accountController = (function () {

    const getAccounts = async function (req, res) {
        try{
            const products=await accountDAO.getAccounts();
            return products;
        }
        catch(error){
            res.status(500);
            res.render("50X", { error: error });
        }
        
        
    }

    const addNewaccount = async function (req, res) {
        const accountId = accountDAO.getAccounts().length + 1;
        const accountNo = req.body.txtAccountNo;
        const customerName = req.body.txtCustomerName;
        const accType = req.body.ddlAccountType;
        const newAccount = new Account(accountId, accountNo, customerName, accType);
        try {
            const opsRes = await accountDAO.saveAccount(newAccount);
            return opsRes;
        
        } catch (error) {
            res.status(500);
            res.render("50X", { error: error });
        }
        

    }

    return {
        getAccounts: getAccounts,
        addNewaccount: addNewaccount
    }

})();
module.exports = accountController;