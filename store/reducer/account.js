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
    "Saved Items",
    "Logout"
  ],
  updateError: null,
  currentUser: null,
  showRecentOrder: null
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
    case actionTypes.DELETE_ADDRESS:
      return updateObject(state, {
        currentUser: action.currentUser,
        updateError: null
      });
    case actionTypes.CREATE_ACCOUNT:
      return updateObject(state, {});
    case actionTypes.CREATE_ACCOUNT_ERROR:
      return updateObject(state, { createAccountError: action.error });
    case actionTypes.RESET_PASSWORD:
      return updateObject(state, {});
    case actionTypes.UPDATE_ERROR:
      return updateObject(state, { updateError: action.error });
    case actionTypes.MODIFY_SAVED_ITEMS:
      return updateObject(state, {});
    case actionTypes.LOGOUT:
      return updateObject(state, { currentUser: null });
    case actionTypes.GET_ORDERS:
      return updateObject(state, { orders: action.orders });
    case actionTypes.SHOW_RECENT_ORDER:
      return updateObject(state, {
        showRecentOrder:
          state.showRecentOrder == action.index ? null : action.index
      });
    default:
      return state;
  }
};
