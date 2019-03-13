import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  SET_CURRENT_PRODUCT: "SET_CURRENT_PRODUCT"
};

const getActions = uri => {
  const objects = {
    setCurrentProduct: product => {
      return {
        type: actionTypes.SET_CURRENT_PRODUCT,
        product: product
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
