let Query = `
    order(input: GetOrderInput): [Order]
`;

let Mutation = `
    createOrder(input: OrderInput): Order
    createOrderInvoice(input: OrderInput): String
`;

let Subscription = ``;

let Type = `
    type Order {
        _id: String
        customerId: String
        invoiceId: String
        orderDate: String
        productList: [String]
    }
`;

let Input = `
    input GetOrderInput {
        jwt: String
        customerId: String
    }

    input OrderInput {
        _id: String
        customerId: String
        invoiceId: String
        productList: [String]
        productCodes: [String]
    }
`;

let Filter = ``;

let Other = `
`;

module.exports = { Query, Mutation, Subscription, Type, Input, Filter, Other };
