const { Account } = require("../../models");

const mongoose = require("mongoose");

const resolvers = {
  Account: {
    address(account) {
      return require("./address").Query.address(null, {
        input: { jwt: account.jwt }
      });
    },
    shipping(account) {
      return require("./address").Query.address(null, {
        input: { jwt: account.jwt, type: "shipping" }
      });
    },
    billing(account) {
      return require("./address").Query.address(null, {
        input: { jwt: account.jwt, type: "billing" }
      });
    }
  },
  Query: {
    account: async (_, { input }) => {
      let accounts;
      let $ = { ...input };
      let { all } = $;
      delete $.all;
      if (all) {
        let account = await Account.find($);
        if (account == null) return [];
        account = account[0];
        if (account.admin != true) return [];
        accounts = await Account.find({});
      } else {
        accounts = await Account.find($);
      }

      return accounts.map(a => {
        a.password = null;
        a.jwt = null;
        return a;
      });
    }
  },
  Mutation: {
    verifyCredentials: async (_, { input }) => {
      let $ = { ...input };
      if ($.email != null) $.email = $.email.toLowerCase();
      let account = await Account.findOne({
        $or: [{ jwt: $.jwt }, { email: $.email }]
      });

      if (!account) {
        throw new Error("Account was not found");
      }

      if ($.jwt == null) {
        const validPassword = account.validPassword($.password);
        if (!validPassword) {
          throw new Error("Password is incorrect");
        }

        account.jwt = account.createToken();
      }

      await account.save();

      account = account.toObject();
      delete account.password;

      return account;
    },
    createAccount: async (_, { input }) => {
      let $ = { ...input };

      let address = mongoose.Types.ObjectId(
        (await require("./address").Mutation.createAddress(null, {
          input: {
            ...$.address
          }
        }))._id
      );
      $.address = address;

      let billing = [];
      if ($.billing != null) {
        for (let _ of $.billing) {
          billing.push(
            mongoose.Types.ObjectId(
              (await require("./address").Mutation.createAddress(null, {
                input: {
                  ..._
                }
              }))._id
            )
          );
        }
      }
      $.billing = billing;

      let shipping = [];
      if ($.shipping != null) {
        for (let _ of $.shipping) {
          shipping.push(
            mongoose.Types.ObjectId(
              (await require("./address").Mutation.createAddress(null, {
                input: {
                  ..._
                }
              }))._id
            )
          );
        }
      }
      $.shipping = shipping;

      let account = new Account({ ...$ });

      account.jwt = account.createToken();
      account.approved = 0;

      await account.save();
      account.password = undefined;

      return account.toObject();
    },
    updateAccount: async (_, { input }) => {
      let $ = { ...input };

      if ($.newPassword != null) {
        if ($.password == null) return { error: "Incorrect previous password" };
        let account = await Account.findOne({ _id: $._id });

        if (account == null) return { error: "Failed to find account by ID" };
        const validPassword = account.validPassword($.password);
        if (!validPassword) {
          return { error: "Incorrect previous password" };
        } else {
          $.password = $.newPassword;
        }
      } else {
        if ($.password != undefined) delete $.password;
      }

      let address;
      if ($.address != null) {
        address = mongoose.Types.ObjectId(
          (await require("./address").Mutation.updateAddress(null, {
            input: {
              ...$.address
            }
          }))._id
        );
        $.address = address;
      }

      let newBilling = [];
      if ($.billing != null) {
        for (let _ of $.billing) {
          let id = mongoose.Types.ObjectId(
            (await require("./address").Mutation.updateAddress(null, {
              input: {
                ..._
              }
            }))._id
          );
          if (_._id == null) newBilling.push(id);
        }
        delete $.billing;
      }

      let newShipping = [];
      if ($.shipping != null) {
        for (let _ of $.shipping) {
          let id = mongoose.Types.ObjectId(
            (await require("./address").Mutation.updateAddress(null, {
              input: {
                ..._
              }
            }))._id
          );
          if (_._id == null) newShipping.push(id);
        }
        delete $.shipping;
      }

      let options = {};

      let $push = {};
      let $pull = {};
      if (newBilling.length > 0) $push.billing = newBilling;
      if (newShipping.length > 0) $push.shipping = newShipping;

      if ($.savedItem != null) {
        if ($.savedItem.slice(0, 2) == "R_") {
          $pull.savedItems = $.savedItem.slice(2);
          delete $.savedItem;
        } else {
          let _savedItem = $.savedItem.split("x");
          let account = await Account.findOne({ _id: $._id });
          if (account == null) return null;

          let { savedItems } = account;

          let $new = true;
          savedItems = savedItems.map(item => item.split("x"));
          savedItems = savedItems.map(item => {
            if (item[0] == _savedItem[0]) {
              item[1] = parseInt(item[1]) + parseInt(_savedItem[1]);
              $new = false;
            }
            return item;
          });
          savedItems = savedItems.map(item => item.join("x"));
          if ($new) savedItems.push($.savedItem);
          delete $.savedItem;
          $.savedItems = savedItems;
        }
      }

      if ($.cartItem != null) {
        if ($.cartItem.slice(0, 2) == "R_") {
          $pull.cartItems = $.cartItem.slice(2);
          delete $.cartItem;
        } else {
          if ($.cartItem != null) $push.cartItems = $.cartItem;
        }
      }

      if (Object.keys($push).length > 0) options.$push = $push;
      if (Object.keys($pull).length > 0) options.$pull = $pull;

      options.$set = $;

      let account = await Account.findOneAndUpdate({ _id: $._id }, options, {
        upsert: true,
        new: true
      });

      account.password = undefined;

      return account.toObject();
    },
    resetPassword: async (_, { input }) => {
      let $ = { ...input };

      let account = await Account.findOne({ email: $.email });
      if (account == null) return "Account does not exist";

      account.password = generatePassword();
      // console.log(account.password);

      // Send Email

      await account.save();

      account.password = null;

      return "Password reset";
    }
  }
};

let generatePassword = () => {
  let length = 12,
    charset = "abcdefghijkmnopqrstuvwxyzACDEFGHJKLMNPQRSTUVWXYZ2345679",
    retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};

module.exports = resolvers;
