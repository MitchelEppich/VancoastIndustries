let Query = `
    account(input: GetAccountInput): [Account]
`;

let Mutation = `
    createAccount(input: AccountInput): Account
    updateAccount(input: AccountInput): Account
    verifyCredentials(input: CredentialsInput): Account
    resetPassword(input: AccountInput): String

    createZohoAccount(input: AccountInput): String
    updateZohoAccount(input: AccountInput): String
`;

let Subscription = ``;

let Type = `
    type Account {
        _id: String
        email: String
        password: String
        address: Address
        shipping: [Address]
        billing: [Address]
        defaultShipping: Int
        defaultBilling: Int
        company: String
        website: String
        license: String
        approved: Int
        admin: Boolean
        description: String
        jwt: String
        createdAt: String
        error: String
        savedItems: [String]
        cartItems: [String]
        customerId: String
    }
`;

let Input = `
    input GetAccountInput {
        jwt: String
        all: Boolean
    }

    input AccountInput {
        _id: String
        email: String
        password: String
        newPassword: String
        company: String
        website: String
        license: String
        description: String
        approved: Int
        address: AddressInput
        shipping: [AddressInput]
        defaultShipping: Int
        defaultBilling: Int
        billing: [AddressInput]
        savedItem: String
        cartItem: String
        cartItems: [String]
        customerId: String

        createAccount: Boolean
    }

    input CredentialsInput {
        email: String
        password: String
        jwt: String
    }
`;

let Filter = ``;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
