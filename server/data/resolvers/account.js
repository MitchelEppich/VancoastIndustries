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
      let account = await Account.findOne({
        email: input.email.toLowerCase()
      });

      if (!account) {
        throw new Error("Email not found");
      }

      const validPassword = account.validPassword($.password);
      if (!validPassword) {
        throw new Error("Password is incorrect");
      }
      account.jwt = account.createToken();

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

      let account = await Account.findOneAndUpdate(
        { _id: $._id },
        {
          $set: { ...$ },
          $push: {
            billing: newBilling,
            shipping: newShipping
          }
        },
        { upsert: true, new: true }
      );

      account.password = undefined;

      return account.toObject();
    }
  }
};

module.exports = resolvers;
