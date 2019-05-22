const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = Schema({
  productList: [String],
  orderDate: { type: Date, default: new Date() },
  customerId: String,
  invoiceId: String
});

module.exports = OrderSchema;
