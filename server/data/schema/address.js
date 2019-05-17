let Query = `
    address(input: GetAddressInput): [Address]
`;

let Mutation = `
    createAddress(input: AddressInput): Address
    updateAddress(input: AddressInput): Address
    deleteAddress(input: DeleteAddressInput): Account
`;

let Subscription = ``;

let Type = `
    type Address {
        _id: String
        name: String
        surname: String
        phone: String
        address: String
        postal: String
        country: String
        apartment: String
        city: String
        state: String
        createdAt: String
    }
`;

let Input = `
    input GetAddressInput {
        jwt: String
        type: String
    }

    input DeleteAddressInput {
        _id: String
        account: String
    }

    input AddressInput {
        _id: String
        name: String
        surname: String
        phone: String
        address: String
        apartment: String
        postal: String
        city: String
        country: String
        state: String
    }
`;

let Filter = ``;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
