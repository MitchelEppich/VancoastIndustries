let Query = `
    account(input: GetAccountInput): [Account]
`;

let Mutation = `
    createAccount(input: AccountInput): Account
    verifyCredentials(input: CredentialsInput): Account
`;

let Subscription = ``;

let Type = `
    type Account {
        _id: String
        email: String
        password: String
        name: String
        surname: String
        company: String
        phone: String
        website: String
        license: String
        approved: Int
        admin: Boolean
        address: String
        postal: String
        country: String
        city: String
        state: String
        description: String
        jwt: String
        createdAt: String
    }
`;

let Input = `
    input GetAccountInput {
        jwt: String
        all: Boolean
    }

    input AccountInput {
        email: String
        password: String
        name: String
        surname: String
        company: String
        phone: String
        website: String
        license: String
        address: String
        postal: String
        city: String
        country: String
        state: String
        description: String
        approved: Int
    }

    input CredentialsInput {
        email: String
        password: String
    }
`;

let Filter = ``;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
