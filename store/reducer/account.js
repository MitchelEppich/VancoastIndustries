import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentOptionIndex: 0,
  options: [
    "Account Info",
    "Shipping",
    "Billing",
    "Change Password",
    "Recent Orders",
    "Saved Items"
  ],
  updateError: null,
  currentUser: null
  // {
  //   email: "vanessa@vancoastind.com",
  //   name: "Vanessa",
  //   surname: "MArk",
  //   company: "Vancoast Industries",
  //   phone: "16041231234",
  //   address: "112 East 6th Av.",
  //   city: "Vancouver",
  //   state: "British Columbia",
  //   country: "CA",
  //   postal: "V8X 2X3",
  //   website: "vancoastindustries.com",
  //   license: "4325233",
  //   description: "we are a nice company and we like to dance",
  //   approved: 1,
  //   admin: true,
  //   createdAt: { type: Date, default: Date.now },
  //   savedItems: ["cksaha10x4", "sonccf5x1", "swgjhf15x3"]
  // }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_OPTION:
      return updateObject(state, { currentOptionIndex: action.option });
    case actionTypes.VERIFY_CREDENTIALS:
      return updateObject(state, { currentUser: action.currentUser });
    case actionTypes.UPDATE_ACCOUNT:
      return updateObject(state, {
        currentUser: action.currentUser,
        updateError: null
      });
    case actionTypes.CREATE_ACCOUNT:
      return updateObject(state, {});
    case actionTypes.RESET_PASSWORD:
      return updateObject(state, {});
    case actionTypes.UPDATE_ERROR:
      return updateObject(state, { updateError: action.error });
    case actionTypes.ADD_TO_WISH_LIST:
      return updateObject(state, { currentUser: action.currentUser });
    default:
      return state;
  }
};
