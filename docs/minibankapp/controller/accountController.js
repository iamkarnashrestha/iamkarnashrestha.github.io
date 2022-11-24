"use strict";
const accountDAO = require("../dao/accountDAO");
const Account = require("../model/account");

const accountController = (function () {

    const getAccounts = function (req, res) {
        return accountDAO.getAccounts();
    }

    const addNewaccount = function (req, res) {
        const accountId = accountDAO.getAccounts().length + 1;
        const accountNo = req.body.txtAccountNo;
        const customerName = req.body.txtCustomerName;
        const accType = req.body.ddlAccountType;
        const newAccount = new Account(accountId, accountNo, customerName, accType);
        accountDAO.saveAccount(newAccount);

    }

    return {
        getAccounts: getAccounts,
        addNewaccount: addNewaccount
    }

})();
module.exports = accountController;