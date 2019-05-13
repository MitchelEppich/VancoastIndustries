const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("../resolvers");

const Account = require("./account");
const Address = require("./address");

let imports = [Account, Address];

let definitions = {};

for (let i = 0; i < imports.length; i++) {
  let _ = imports[i];
  let $ = Object.keys(_);

  for (let x of $) {
    let value = _[x];
    if (value == undefined || value.trim().length == 0) continue;
    if (definitions[x] == null) definitions[x] = "";
    definitions[x] += value;
  }
}

let typeDefs = `
  type Query {
    ${definitions.Query || ""}
  }

  ${definitions.Type || ""}

  ${definitions.Filter || ""}

  ${definitions.Input || ""}

  ${definitions.Other || ""}

  type Mutation {
    ${definitions.Mutation || ""}
  } 
`;

// type Subscription {
//     ${ definitions.Subscription || "" }
//   }

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
