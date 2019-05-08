const mongoose = require("mongoose");

const AccountSchema = require("./account");

const Account = mongoose.model("Account", AccountSchema);

exports.Account = Account;
