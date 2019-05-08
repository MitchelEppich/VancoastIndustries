const { Account } = require("../../models");

const resolvers = {
  Query: {
    account: (_, { input }) => {
      return Account.find(input);
    }
  },
  Mutation: {
    createAccount: async (_, { input }) => {
      let $ = { ...input };

      let account = new Account({ ...$ });

      account.jwt = account.createToken();
      account.approved = 0;

      await account.save();
      account.password = undefined;

      return account.toObject();
    }
  }
};

module.exports = resolvers;
