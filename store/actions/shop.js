import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  TOGGLE_FILTERS: "TOGGLE_FILTERS",
  SET_BRAND_INDEX: "SET_BRAND_INDEX",
  TOGGLE_MOBILE_MENU: "TOGGLE_MOBILE_MENU",
  SET_STRAINS: "SET_STRAINS"
};

const getActions = uri => {
  const objects = {
    toggleFilters: isFilterVisible => {
      return {
        type: actionTypes.TOGGLE_FILTERS,
        isFilterVisible: isFilterVisible
      };
    },
    setBrandIndex: index => {
      return {
        type: actionTypes.SET_BRAND_INDEX,
        index: index
      };
    },
    toggleMobileMenu: isMobileMenuVisible => {
      return {
        type: actionTypes.TOGGLE_MOBILE_MENU,
        isMobileMenuVisible: isMobileMenuVisible
      };
    },
    setStrains: strains => {
      return {
        type: actionTypes.SET_STRAINS,
        strains: strains
      };
    }
  };

  return { ...objects };
};
const query = {};

const mutation = {};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
