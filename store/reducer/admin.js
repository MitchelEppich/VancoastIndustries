import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
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
    // case actionTypes.CHANGE_OPTION:
    //   return updateObject(state, { currentOptionIndex: action.option });

    default:
      return state;
  }
};
