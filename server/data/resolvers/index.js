const Account = require("./account");

let imports = [Account];

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

module.exports = resolvers;
