const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const AccountSchema = Schema({
  password: String,
  email: String,
  company: String,
  website: String,
  license: String,
  cartItems: [String],
  jwt: String,
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address"
  },
  billing: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address"
    }
  ],
  shipping: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address"
    }
  ],
  approved: Number,
  admin: Boolean,
  description: String,
  createdAt: { type: Date, default: Date.now },
  savedItems: [String]
});

// adds a method to a user document object to create a hashed password
AccountSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// adds a method to a user document object to check if provided password is correct
AccountSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

AccountSchema.methods.createToken = function() {
  return jwt.sign(
    { _id: this._id, email: this.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_TOKEN_EXPIRE
    }
  );
};

AccountSchema.methods.verifyToken = (token, callback) => {
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // console.log("VERIFY TOKEN", err, decoded);

    let current_time = new Date().getTime() / 1000;

    if (current_time > decoded.exp) {
      console.log("JWT is expired");
    }

    if (decoded.exp - decoded.iat != process.env.JWT_TOKEN_EXPIRE) {
      console.log("JWT is not authentic");
    }

    if (err) {
      return callback(err);
    }

    return callback(decoded);
  });
};

// middleware: before saving, check if password was changed,
// and if so, encrypt new password before saving:
AccountSchema.pre("findOneAndUpdate", function(next) {
  // Hash the password if updated
  if (this._update.$set.password) {
    this._update.$set.password = this.schema.methods.generateHash(
      this._update.$set.password
    );
  }
  next();
});
AccountSchema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = this.generateHash ? this.generateHash(this.password) : null;
  }
  next();
});

module.exports = AccountSchema;
