const mongoose = require("mongoose");

const AccountSchema = require("./account");
const AddressSchema = require("./address");
const EmailSchema = require("./email");
const OrderSchema = require("./order");

const Account = mongoose.model("Account", AccountSchema);
const Address = mongoose.model("Address", AddressSchema);
const Email = mongoose.model("Email", EmailSchema);
const Order = mongoose.model("Order", OrderSchema);

exports.Account = Account;
exports.Address = Address;
exports.Email = Email;
exports.Order = Order;
