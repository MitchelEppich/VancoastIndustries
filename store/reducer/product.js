import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentProduct: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PRODUCT:
      return updateObject(state, {
        currentProduct: action.currentProduct
      });
    default:
      return state;
  }
};
