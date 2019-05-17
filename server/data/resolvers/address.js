const { Address, Account } = require("../../models");

const mongoose = require("mongoose");

const resolvers = {
  Query: {
    address: async (_, { input }) => {
      let $ = { ...input };

      if ($.jwt == null) return null;

      let account = await require("./account").Query.account(null, {
        input: { jwt: $.jwt }
      });

      if (account == null) return null;
      account = account[0];

      switch ($.type) {
        case "shipping":
          return Address.find({ _id: { $in: account.shipping } });
        case "billing":
          return Address.find({ _id: { $in: account.billing } });
        default:
          return Address.findOne({ _id: account.address });
      }
    }
  },
  Mutation: {
    createAddress: async (_, { input }) => {
      let $ = { ...input };

      let address = new Address({ ...$ });

      await address.save();

      return address.toObject();
    },
    deleteAddress: async (_, { input }) => {
      let $ = { ...input }

      if ($.account == null || $._id == null) return null;

      Address.findOneAndDelete({ _id: $._id })
      let account = await Account.findOneAndUpdate({ _id: $.account }, { $pull: { billing: $._id, shipping: $._id } }, { new: true })

      if (account == null) return null;

      account.password = undefined;

      return account.toObject();

    },
    updateAddress: async (_, { input }) => {
      let $ = { ...input };

      if ($._id == null) $._id = new mongoose.mongo.ObjectID();

      let address = await Address.findOneAndUpdate(
        { _id: $._id },
        { $set: { ...$ } },
        { upsert: true, new: true }
      );

      return address.toObject();
    }
  }
};

module.exports = resolvers;
