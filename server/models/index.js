const mongoose = require("mongoose");

const AccountSchema = require("./account");
const AddressSchema = require("./address");

const Account = mongoose.model("Account", AccountSchema);
const Address = mongoose.model("Address", AddressSchema);

exports.Account = Account;
exports.Address = Address;
