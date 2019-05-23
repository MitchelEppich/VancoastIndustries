const { Account } = require("../../models");

const nodemailer = require("nodemailer");
const emailTemplates = require("../emails");
const mongoose = require("mongoose");

const request = require("request-promise");

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

      let account = await Account.findOne({ email: $.email });
      if (account) return { error: "Email exists" };

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

      account = new Account({ ...$ });

      account.jwt = account.createToken();
      account.approved = 0;

      await account.save();
      account.password = undefined;

      return account.toObject();
    },
    updateAccount: async (_, { input }) => {
      let $ = { ...input };

      console.log($);

      // if ($.approved == 1) {
      //   resolvers.Mutation.createZohoAccount(null, { input: { _id: $._id } });
      // }

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
      console.log(options);
      let account = await Account.findOneAndUpdate({ _id: $._id }, options, {
        upsert: true,
        new: true
      });

      account.password = undefined;

      return account.toObject();
    },
    createZohoAccount: async (_, { input }) => {
      let account = await Account.findOne({ _id: input._id }).populate(
        "address"
      );

      if (account == null) return null;
      console.log(account);
      let zohoAccountRequest = {
        contact_name: account.address.name + " " + account.address.surname,
        company_name: account.company,
        website: account.website,
        notes: "Business License: " + account.license,
        contact_persons: [
          {
            first_name: account.address.name,
            last_name: account.address.surname,
            email: account.email,
            phone: account.address.phone
          }
        ],
        billing_address: {
          attention: account.address.name + " " + account.address.surname,
          address: account.address.address,
          street2: account.address.apartment,
          city: account.address.city,
          state: account.address.state,
          zip: account.address.postal,
          country: account.address.country,
          phone: account.address.phone
        },
        shipping_address: {
          attention: account.address.name + " " + account.address.surname,
          address: account.address.address,
          street2: account.address.apartment,
          city: account.address.city,
          state: account.address.state,
          zip: account.address.postal,
          country: account.address.country,
          phone: account.address.phone
        }
      };

      console.log(zohoAccountRequest);

      let options = {
        method: "POST",
        uri: "https://invoice.zoho.com/api/v3/contacts",
        formData: {
          JSONString: JSON.stringify(zohoAccountRequest)
        },
        headers: {
          Authorization: "f86f4906a3b740667322433cfb9e431d",
          "X-com-zoho-invoice-organizationid": 59999705,
          "Content-Type": "multipart/form-data"
        }
      };
      request(options)
        .then(parsedBody => {
          let $ = JSON.parse(parsedBody);

          console.log($);
        })
        .catch(function(err) {
          // POST failed...
          console.log(err);
        });

      return null;
    },
    resetPassword: async (_, { input }) => {
      let $ = { ...input };

      let account = await Account.findOne({ email: $.email });
      if (account == null) return "Account does not exist";

      account.password = generatePassword();
      console.log(account.password);

      // Send Email
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "vancoastindustries.noreply@gmail.com",
          pass: "ag498zip^"
        }
      });
      let mailOptions;
      mailOptions = emailTemplates.resetPassword({
        email: $.email,
        pwd: account.password
      });
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          // Do nothing
          console.log(error);
        }
      });

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
