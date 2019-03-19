/*******************************************/
/*Index Actions for all miscellaneous related
dispatch actions. All other actiontypes are
imported into this file, to then be exported
for the reducers and corresponding pages.*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import Shop from "./shop";
import Checkout from "./checkout";
import Account from "./account";
import Product from "./product";

const uri = "http://localhost:3000/graphql";

const imports = {
  ...Shop(uri),
  ...Checkout(uri),
  ...Account(uri),
  ...Product(uri)
};

const actionTypes = {
  TOGGLE_CART: "TOGGLE_CART",
  TOGGLE_MENU_DROPDOWN: "TOGGLE_MENU_DROPDOWN",
  SET_MEDIA_SIZE: "SET_MEDIA_SIZE",
  TOGGLE_PAGE_READY: "TOGGLE_PAGE_READY",
  TOGGLE_SEARCH_BAR: "TOGGLE_SEARCH_BAR",
  SET_SEARCH_VALUE: "SET_SEARCH_VALUE",
  TOGGLE_MOBILE_MENU: "TOGGLE_MOBILE_MENU"
};

const actions = {
  toggleCart: isCartVisible => {
    return {
      type: actionTypes.TOGGLE_CART,
      isCartVisible: isCartVisible
    };
  },
  toggleSearchBar: input => {
    return {
      type: actionTypes.TOGGLE_SEARCH_BAR,
      input: input
    };
  },
  toggleMobileMenu: isMobileMenuVisible => {
    return {
      type: actionTypes.TOGGLE_MOBILE_MENU,
      isMobileMenuVisible: isMobileMenuVisible
    };
  },
  toggleMenuDropdown: options => {
    let value;
    if (options.show === false) {
      value = null;
    } else {
      value = options.value;
    }
    return {
      type: actionTypes.TOGGLE_MENU_DROPDOWN,
      value: value
    };
  },
  setMediaSize: input => {
    return {
      type: actionTypes.SET_MEDIA_SIZE,
      input: input.mediaSize
    };
  },
  togglePageReady: isPageReady => {
    return {
      type: actionTypes.TOGGLE_PAGE_READY,
      pageReady: isPageReady
    };
  },
  setSearchValue: value => {
    return {
      type: actionTypes.SET_SEARCH_VALUE,
      searchValue: value
    };
  }
};

const query = {};

const mutation = {};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
