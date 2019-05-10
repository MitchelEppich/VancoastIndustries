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
    createdAt: { type: Date, default: Date.now },
    savedItems: ["cksaha10x4", "sonccf5x1", "swgjhf15x3"]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_OPTION:
      return updateObject(state, { currentOptionIndex: action.option });
    case actionTypes.VERIFY_CREDENTIALS:
      return updateObject(state, { currentUser: action.currentUser });
    case actionTypes.UPDATE_ACCOUNT:
      return updateObject(state, { currentUser: action.currentUser });
    case actionTypes.CREATE_ACCOUNT:
      return updateObject(state, {});
    case actionTypes.ADD_TO_WISH_LIST:
      return updateObject(state, { currentUser: action.currentUser });
    default:
      return state;
  }
};
