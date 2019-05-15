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
import Admin from "./admin";
import Product from "./product";

const uri = "http://127.0.0.1:3000/graphql";

const imports = {
  ...Shop(uri),
  ...Checkout(uri),
  ...Account(uri),
  ...Admin(uri),
  ...Product(uri)
};

const actionTypes = {
  TOGGLE_CART: "TOGGLE_CART",
  TOGGLE_MENU_DROPDOWN: "TOGGLE_MENU_DROPDOWN",
  SET_MEDIA_SIZE: "SET_MEDIA_SIZE",
  TOGGLE_PAGE_READY: "TOGGLE_PAGE_READY",
  TOGGLE_SEARCH_BAR: "TOGGLE_SEARCH_BAR",
  SET_SEARCH_VALUE: "SET_SEARCH_VALUE",
  TOGGLE_MOBILE_MENU: "TOGGLE_MOBILE_MENU",
  TOGGLE_ALERT: "TOGGLE_ALERT",
  TOGGLE_MATM: "TOGGLE_MATM",
  SUBSCRIBE_TO_NEWSLETTER: "SUBSCRIBE_TO_NEWSLETTER",
  SEND_EMAIL: "SEND_EMAIL"
};

const actions = {
  toggleCart: isCartVisible => {
    return {
      type: actionTypes.TOGGLE_CART,
      isCartVisible: isCartVisible
    };
  },
  toggleSearchBar: showSearch => {
    return {
      type: actionTypes.TOGGLE_SEARCH_BAR,
      showSearch: showSearch
    };
  },
  toggleMobileMenu: isMobileMenuVisible => {
    return {
      type: actionTypes.TOGGLE_MOBILE_MENU,
      isMobileMenuVisible: isMobileMenuVisible
    };
  },
  toggleMATM: show => {
    return {
      type: actionTypes.TOGGLE_MATM,
      show: show
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
  },
  toggleAlert: alertObj => {
    return {
      type: actionTypes.TOGGLE_ALERT,
      alertObj: alertObj
    };
  },
  subscribeToNewsletter: input => {
    console.log(input);
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: mutation.subscribeToNewsletter,
        variables: { ...input }
      };

      makePromise(execute(link, operation))
        .then(data => {
          dispatch({
            type: actionTypes.SUBSCRIBE_TO_NEWSLETTER
          });
        })
        .catch(error => console.log(error));
    };
  },
  sendEmail: input => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: mutation.sendEmail,
        variables: { ...input }
      };

      makePromise(execute(link, operation))
        .then(data => {
          dispatch({
            type: actionTypes.SEND_EMAIL
          });
        })
        .catch(error => console.log(error));
    };
  },
  refreshEmailForm: () => {
    return { type: actionTypes.REFRESH_EMAIL_FORM };
  }
};

const query = {};

const mutation = {
  subscribeToNewsletter: gql`
    mutation($email: String) {
      subscribeToNewsletter(email: $email)
    }
  `,
  sendEmail: gql`
    mutation(
      $type: String
      $name: String
      $email: String
      $subject: String
      $body: String
    ) {
      sendEmail(
        input: {
          type: $type
          name: $name
          email: $email
          subject: $subject
          body: $body
        }
      )
    }
  `
};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
