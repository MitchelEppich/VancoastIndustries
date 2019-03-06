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

const uri = "http://localhost:3000/graphql";

const imports = {
  ...Shop(uri),
  ...Checkout(uri),
  ...Account(uri)
};

const actionTypes = {
  TOGGLE_CART: "TOGGLE_CART",
  TOGGLE_MENU_DROPDOWN: "TOGGLE_MENU_DROPDOWN"
};

const actions = {
  toggleCart: isCartVisible => {
    return {
      type: actionTypes.TOGGLE_CART,
      isCartVisible: isCartVisible
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
