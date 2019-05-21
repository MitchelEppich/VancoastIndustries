import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentAccount: null,
  statuses: [
    { label: "pending", color: "purple" },

    { label: "approved", color: "green" },

    { label: "declined", color: "orange" },

    { label: "banned", color: "red" }
  ],
  statusNote: "",
  searchTerm: "",
  sortByIndex: 0,
  accounts: []
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
    case actionTypes.GET_ACCOUNTS:
      return updateObject(state, { accounts: action.accounts });
    case actionTypes.CHANGE_ACCOUNT_STATUS:
      return updateObject(state, { accounts: action.accounts });
    default:
      return state;
  }
};
