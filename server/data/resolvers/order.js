const { Order } = require("../../models");

const mongoose = require("mongoose");

const request = require("request-promise");

const moment = require("moment-timezone");

const resolvers = {
  Query: {
    order: async (_, { input }) => {
      let $ = { ...input };

      if ($.jwt == null) return null;

      let account = await require("./account").Query.account(null, {
        input: { jwt: $.jwt }
      });

      if (account == null) return null;
      account = account[0];

      if (account.admin == true && input.customerId != null) {
        return Order.find({ customerId: input.customerId });
      } else {
        return Order.find({ customerId: account.customerId });
      }
    }
  },
  Mutation: {
    createOrderInvoice: async (_, { input }) => {
      let options = {
        method: "POST",
        uri: "https://invoice.zoho.com/api/v3/invoices",
        formData: {
          JSONString: JSON.stringify({
            customer_id: input.customerId,
            date: moment()
              .tz("America/Vancouver")
              .format("YYYY-MM-DD"),
            line_items: input.productList.map(a => {
              let data = a.split("/&=>");
              return {
                name: data[0],
                quantity: data[1],
                rate: data[2]
              };
            })
          })
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

          let {
            invoice: { invoice_number }
          } = $;

          resolvers.Mutation.createOrder(null, {
            input: {
              customerId: input.customerId,
              invoiceId: invoice_number,
              productList: input.productCodes
            }
          });

          return invoice_number;
        })
        .catch(function(err) {
          // POST failed...
          console.log(err);
        });

      return null;
    },
    createOrder: (_, { input }) => {
      let order = new Order({ ...input });

      order.save();

      return order.toObject();
    }
  }
};

const toUrlEncoded = obj =>
  Object.keys(obj)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");

module.exports = resolvers;
