const Account = require("./account");
const Address = require("./address");

const nodemailer = require("nodemailer");
const path = require("path");
// const emailTemplates = require("../emails");

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
  sendEmail: async (_, { input }) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "cropkingseeds.noreply@gmail.com",
        pass: "ag498zip^"
      }
    });
    let mailOptions;
    // switch (input.type) {
    //   case "contact":
    //     mailOptions = emailTemplates.contact({
    //       ...input
    //     });
    //     var options = {
    //       method: "POST",
    //       uri: "https://www.google.com/recaptcha/api/siteverify",
    //       formData: {
    //         secret: "6LdVgJIUAAAAAAinDAgg0p2N2v3KuIIK7wDlpMhh",
    //         response: input.response
    //       },
    //       headers: {
    //         "content-type": "application/x-www-form-urlencoded"
    //       }
    //     };
    //     transporter.sendMail(mailOptions, (error, info) => {
    //       if (error) {
    //         // Do nothing
    //         console.log(error);
    //       }
    //       console.log("sent");
    //     });
    //     // request(options)
    //     //   .then(function(parsedBody) {
    //     //     // POST succeeded...
    //     //   })
    //     //   .catch(function(err) {
    //     //     // POST failed...
    //     //     console.log(err);
    //     //   });
    //     break;
    //   case "confirmation":
    //     const email = new Emailer({
    //       message: {
    //         from: "info@cropkingseeds.com"
    //       },
    //       // uncomment below to send emails in development/test env:
    //       // send: true,
    //       transport: transporter,
    //       webResources: {
    //         //
    //         // this is the relative directory to your CSS/image assets
    //         // and its default path is `build/`:
    //         //
    //         // e.g. if you have the following in the `<head`> of your template:
    //         // `<link rel="stylesheet" href="style.css" data-inline="data-inline">`
    //         // then this assumes that the file `build/style.css` exists
    //         //
    //         // relativeTo: path.resolve("build")
    //         //
    //         // but you might want to change it to something like:
    //         relativeTo: path.join(__dirname, "../emails", "mars")
    //         // (so that you can re-use CSS/images that are used in your web-app)
    //         //
    //       }
    //     });

    //     email
    //       .send({
    //         template: path.join(__dirname, "../emails", "mars"),
    //         message: {
    //           to: input.email
    //         },
    //         locals: {
    //           ...input,
    //           moneyGram:
    //             input.moneyGram == null ? {} : JSON.parse(input.moneyGram)
    //         }
    //       })
    //       .then(console.log("Confirmation email sent."))
    //       .catch(console.error);
    //     // mailOptions = emailTemplates.confirmation({
    //     // });
    //     // transporter.sendMail(mailOptions, (error, info) => {
    //     //   if (error) {
    //     //     // Do nothing
    //     //   }
    //     // });
    //     break;
    // }
  }
};

module.exports = resolvers;
