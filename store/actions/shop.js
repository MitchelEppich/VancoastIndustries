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
    purgeActiveFilters: activeFilters => {
      while (activeFilters.length > 0) {
        activeFilters.pop();
      }
      return {
        type: actionTypes.PURGE_ACTIVE_FILTERS,
        activeFilters: activeFilters
      };
    },
    getStrains: () => {
      return async dispatch => {
        axios
          .get("http://127.0.0.1:3001/inventory", {
            crossdomain: true,
            params: {
              query:
                '{variant(input:{website:["cropkingseeds.com", "sonomaseeds.com", "sunwestgenetics.com"]}){sotiId, sttId,alias, summary, description, releaseDate, company { assetsUrl, name }, attributes {price, size, stock { amount, distributor }}, strain { cbd, thc, cbn, effect, yield, genetic, flowerTime, origin, difficulty, indica, sativa, ruderalis, environment }}}'
            }
          })
          .then(function(response) {
            let _strains = response.data.map((strain, index) => {
              console.log(strain);
              return inferStrainData(strain);
            });
            dispatch(objects.setStrains(_strains));
          })
          .catch(function(error) {
            console.log(error);
          });
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
