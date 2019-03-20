import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  TOGGLE_FILTER_VISIBILITY: "TOGGLE_FILTER_VISIBILITY",
  SET_BRAND_INDEX: "SET_BRAND_INDEX",
  SET_STRAINS: "SET_STRAINS",
  TOGGLE_FILTER: "TOGGLE_FILTER",
  PURGE_ACTIVE_FILTERS: "PURGE_ACTIVE_FILTERS"
};

const getActions = uri => {
  const objects = {
    toggleFilterVisibility: isFilterVisible => {
      return {
        type: actionTypes.TOGGLE_FILTER_VISIBILITY,
        isFilterVisible: isFilterVisible
      };
    },
    setBrandIndex: input => {
      return {
        type: actionTypes.SET_BRAND_INDEX,
        input: input
      };
    },
    setStrains: strains => {
      return {
        type: actionTypes.SET_STRAINS,
        strains: strains
      };
    },
    toggleFilter: options => {
      let activeFilters = options.activeFilters;
      if (activeFilters.includes(options.newFilter)) {
        activeFilters.splice(activeFilters.indexOf(options.newFilter), 1);
      } else {
        activeFilters.push(options.newFilter);
      }
      return {
        type: actionTypes.TOGGLE_FILTER,
        activeFilters: activeFilters
      };
    },
    purgeActiveFilters: () => {
      return {
        type: actionTypes.PURGE_ACTIVE_FILTERS
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
