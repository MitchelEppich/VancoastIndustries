import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentOptionIndex: 0,
  options: [
    "Account Info",
    "Billing Info",
    "Reset Password",
    "Recent Orders",
    "Saved Items"
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
