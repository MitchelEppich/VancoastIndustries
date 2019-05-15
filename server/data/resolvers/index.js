const Account = require("./account");
const Address = require("./address");

const { Email } = require("../../models");

const nodemailer = require("nodemailer");
const path = require("path");
const emailTemplates = require("../emails");

let imports = [Account, Address];

let resolvers = {};

for (let i = 0; i < imports.length; i++) {
  let _ = imports[i];
  if (_ == null) continue;
  let $ = Object.keys(_);
  for (let x of $) {
    let value = _[x];
    if (value == undefined || Object.keys(value).length == 0) continue;
    if (resolvers[x] == null) resolvers[x] = {};
    resolvers[x] = { ...resolvers[x], ...value };
  }
}

resolvers["Mutation"] = {
  ...resolvers["Mutation"],
  subscribeToNewsletter: async (_, input) => {
    let email = new Email({
      ...input
    });

    email.save();

    return input.email + " has been subscribed to the newsletter!";
  },
  sendEmail: async (_, { input }) => {
    console.log(input);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vancoastindustries.noreply@gmail.com",
        pass: "ag498zip^"
      }
    });
    let mailOptions;
    switch (input.type) {
      case "contact":
        mailOptions = emailTemplates.contact({
          ...input
        });
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            // Do nothing
            console.log(error);
          }
        });
        // RECAPTCHA
        // var options = {
        //   method: "POST",
        //   uri: "https://www.google.com/recaptcha/api/siteverify",
        //   formData: {
        //     secret: "6LdVgJIUAAAAAAinDAgg0p2N2v3KuIIK7wDlpMhh",
        //     response: input.response
        //   },
        //   headers: {
        //     "content-type": "application/x-www-form-urlencoded"
        //   }
        // };
        // request(options)
        //   .then(function(parsedBody) {
        //     // POST succeeded...
        //   })
        //   .catch(function(err) {
        //     // POST failed...
        //     console.log(err);
        //   });
        break;
      case "wholesale-application":
        console.log("hit");
        mailOptions = emailTemplates.wholesaleApplication({
          ...input
        });
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            // Do nothing
            console.log(error);
          }
        });
        break;
      default:
        break;
    }
  }
};

module.exports = resolvers;
