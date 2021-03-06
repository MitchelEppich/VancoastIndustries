import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import axios from "axios";
import { inferStrainData } from "../utilities/strain";

const actionTypes = {
  TOGGLE_FILTER_VISIBILITY: "TOGGLE_FILTER_VISIBILITY",
  SET_BRAND_INDEX: "SET_BRAND_INDEX",
  SET_STRAINS: "SET_STRAINS",
  TOGGLE_FILTER: "TOGGLE_FILTER",
  PURGE_ACTIVE_FILTERS: "PURGE_ACTIVE_FILTERS",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_QUICK_VIEW: "SET_QUICK_VIEW",
  TOGGLE_ANIMATION: "TOGGLE_ANIMATION"
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
      let cat = options.category;
      if (activeFilters[cat] == options.newFilter) {
        activeFilters[cat] = "";
      } else {
        activeFilters[cat] = options.newFilter;
      }
      return {
        type: actionTypes.TOGGLE_FILTER,
        activeFilters: activeFilters
      };
    },
    purgeActiveFilters: activeFilters => {
      for (let filter of Object.keys(activeFilters)) {
        activeFilters[filter] = "";
      }
      return {
        type: actionTypes.PURGE_ACTIVE_FILTERS,
        activeFilters: activeFilters
      };
    },
    getStrains: () => {
      return dispatch => {
        return new Promise((resolve, reject) => {
          axios
            .get("http://127.0.0.1:3001/inventory", {
              crossdomain: true,
              params: {
                query:
                  '{variant(input:{website:["cropkingseeds.com", "sonomaseeds.com", "sunwestgenetics.com"]}){sotiId, sttId,alias, summary, description, releaseDate, company { assetsUrl, name }, attributes {price, wholesale, size, stock { amount, distributor }}, strain { cbd, thc, cbn, effect, type, yield, genetic, flowerTime, origin, difficulty, indica, sativa, ruderalis, environment }}}'
              }
            })
            .then(function(response) {
              let _strains = response.data;
              resolve(_strains);
              dispatch(objects.setStrains(_strains));
            })
            .catch(function(error) {
              console.log(error);
            });
        });
      };
    },
    toggleModal: product => {
      return {
        type: actionTypes.TOGGLE_MODAL,
        product: product
      };
    },
    setQuickView: input => {
      return {
        type: actionTypes.SET_QUICK_VIEW,
        quickViewProduct: input.viewProduct,
        showQuickViewProduct: input.showQuickViewProduct
      };
    },
    toggleAnimation: active => {
      return {
        type: actionTypes.TOGGLE_ANIMATION,
        active: active
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
