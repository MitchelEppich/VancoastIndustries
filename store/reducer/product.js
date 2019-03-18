import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentProduct: null,
  quickAddToCartQty: 1
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PRODUCT:
      return updateObject(state, {
        currentProduct: action.currentProduct
      });
    case actionTypes.QUICK_ADD_TO_CART_QTY:
      return updateObject(state, {
        quickAddToCartQty: action.input
      });
    default:
      return state;
  }
};
