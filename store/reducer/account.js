import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentOptionIndex: 0,
  options: [
    "Shipping Info",
    "Billing Info",
    "Reset Password",
    "Recent Orders",
    "Saved Items"
  ],
  currentUser: {
    email: "vanessa@vancoastind.com",
    name: "Vanessa",
    company: "Vancoast Industries",
    phone: "16041231234",
    website: "vancoastindustries.com",
    license: "",
    approved: 0,
    admin: true,
    createdAt: { type: Date, default: Date.now }
  },
  currentAccount: {
    email: "ivan@seedsforsale.com",

    name: "Ivan Johnson",
    company: "seeds fo sale",
    phone: "16041231234",
    website: "seedsforsale.com",
    license: "123456789",
    approved: 0,
    admin: false,
    createdAt: { type: Date, default: Date.now }
  },
  accounts: [
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 0,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 0,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 0,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 0,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 1,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 1,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 1,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 1,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 1,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 1,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 1,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 2,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 2,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 2,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 3,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 3,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 3,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 3,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    },
    {
      email: "ivan@seedsforsale.com",

      name: "Ivan Johnson",
      company: "seeds fo sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 3,
      admin: false,
      createdAt: { type: Date, default: Date.now }
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_OPTION:
      return updateObject(state, { currentOptionIndex: action.option });
    case actionTypes.VERIFY_LOGIN:
      return updateObject(state, {});
    default:
      return state;
  }
};
