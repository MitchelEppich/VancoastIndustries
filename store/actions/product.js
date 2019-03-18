import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  SET_CURRENT_PRODUCT: "SET_CURRENT_PRODUCT",
  QUICK_ADD_TO_CART_QTY: "QUICK_ADD_TO_CART_QTY"
};

const getActions = uri => {
  const objects = {
    setCurrentProduct: input => {
      return {
        type: actionTypes.SET_CURRENT_PRODUCT,
        currentProduct: input.newProduct
      };
    },
    quickAddToCartQty: (index, quickAddToCartQty = null, tag = null) => {
      if (tag != null) {
        if (quickAddToCartQty == null || typeof quickAddToCartQty === "number")
          quickAddToCartQty = { [tag]: index };
        else if (index == undefined) {
          delete quickAddToCartQty[tag];
        } else quickAddToCartQty[tag] = index;
      }

      return {
        type: actionTypes.QUICK_ADD_TO_CART_QTY,
        input: quickAddToCartQty || index
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
