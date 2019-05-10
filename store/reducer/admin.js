import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentAccount: {
    email: "ivan@seedsforsale.com",
    name: "Ivan Johnson",
    company: "seeds for sale",
    phone: "16041231234",
    website: "seedsforsale.com",
    license: "123456789",
    approved: 0,
    admin: false,
    createdAt: { type: Date, default: Date.now }
  },
  statuses: [
    { label: "pending", color: "purple" },

    { label: "approved", color: "green" },

    { label: "declined", color: "orange" },

    { label: "banned", color: "red" }
  ],
  statusNote: "",
  searchTerm: "",
  sortByIndex: 0,
  accounts: [
    {
      email: "ivan@seedsforsale.com",
      name: "Ivan Johnson",
      company: "seeds for sale",
      phone: "16041231234",
      website: "seedsforsale.com",
      license: "123456789",
      approved: 0,
      admin: false,
      createdAt: { type: Date, default: Date.now() }
    },
    {
      email: "ivan@seedsforsale.com",
      name: "Ivan Johnson",
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
      company: "seeds for sale",
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
    case actionTypes.SET_ACCOUNT_VIEW:
      return updateObject(state, { currentAccount: action.currentAccount });
    case actionTypes.HANDLE_STATUS_CHANGE_NOTE:
      return updateObject(state, { statusNote: action.note });
    case actionTypes.CHANGE_ACCOUNT_STATUS:
      return updateObject(state, {});
    case actionTypes.SEARCH_ACCOUNTS:
      return updateObject(state, { searchTerm: action.searchTerm });
    case actionTypes.SORT_ACCOUNTS:
      return updateObject(state, { sortByIndex: action.sortByIndex });
    default:
      return state;
  }
};
