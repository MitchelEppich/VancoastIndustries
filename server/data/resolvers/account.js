const { Account } = require("../../models");

const resolvers = {
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

      let account = new Account({ ...$ });

      account.jwt = account.createToken();
      account.approved = 0;

      await account.save();
      account.password = undefined;

      return account.toObject();
    },
    updateAccount: async (_, { input }) => {
      let $ = { ...input };

      let account = Account.findOneAndUpdate(
        { _id: $._id },
        { $set: { ...$ } },
        { upsert: true, new: true }
      );

      account.password = undefined;

      return account.toObject();
    }
  }
};

module.exports = resolvers;
