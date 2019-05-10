/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

import ShopReducer from "./shop";
import CheckoutReducer from "./checkout";
import AccountReducer from "./account";
import AdminReducer from "./admin";
import ProductReducer from "./product";

const initialState = {
  showCart: false,
  menuDropdownVisible: null,
  mediaSize: "xl",
  pageReady: false,
  showSearchBar: false,
  searchValue: "",
  showMobileMenu: false
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART:
      return updateObject(state, { showCart: action.isCartVisible });
    case actionTypes.TOGGLE_SEARCH_BAR:
      return updateObject(state, { showSearchBar: !state.showSearchBar });
    case actionTypes.SET_SEARCH_VALUE:
      return updateObject(state, { searchValue: action.searchValue });
    case actionTypes.TOGGLE_MOBILE_MENU:
      return updateObject(state, {
        showMobileMenu: !state.showMobileMenu
      });
    case actionTypes.TOGGLE_MENU_DROPDOWN:
      return updateObject(state, { menuDropdownVisible: action.value });
    case actionTypes.SET_MEDIA_SIZE:
      return updateObject(state, { mediaSize: action.input });
    case actionTypes.TOGGLE_PAGE_READY:
      return updateObject(state, { pageReady: action.pageReady });
    default:
      return state;
  }
};

export default combineReducers({
  misc: indexReducer,
  shop: ShopReducer,
  checkout: CheckoutReducer,
  account: AccountReducer,
  product: ProductReducer,
  admin: AdminReducer
});
