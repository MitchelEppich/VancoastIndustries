const mongoose = require("mongoose");

const AccountSchema = require("./account");
const AddressSchema = require("./address");
const EmailSchema = require("./email");

const Account = mongoose.model("Account", AccountSchema);
const Address = mongoose.model("Address", AddressSchema);
const Email = mongoose.model("Email", EmailSchema);

exports.Account = Account;
exports.Address = Address;
exports.Email = Email;
