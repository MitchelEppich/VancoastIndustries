const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = Schema({
  surname: String,
  name: String,
  phone: String,
  postal: String,
  country: String,
  state: String,
  address: String,
  apartment: String,
  city: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = AddressSchema;
