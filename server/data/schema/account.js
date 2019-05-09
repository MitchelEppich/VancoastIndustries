let Query = `
    account(input: AccountInput!): [Account]
    verifyCredentials(input: CredentialsInput): Account
`;

let Mutation = `
    createAccount(input: AccountInput): Account
`;

let Subscription = ``;

let Type = `
    type Account {
        _id: String
        username: String
        email: String
        password: String
        name: String
        company: String
        phone: String
        website: String
        license: String
        approved: Int
        admin: Boolean
        jwt: String
        createdAt: String
    }
`;

let Input = `
    input AccountInput {
        username: String
        email: String
        password: String
        name: String
        company: String
        phone: String
        website: String
        license: String
        approved: Int
    }

    input CredentialsInput {
        username: String
        email: String
        password: String
    }
`;

let Filter = ``;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
