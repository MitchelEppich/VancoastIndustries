import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentStep: "Cart",
  steps: ["Cart", "Shipping", "Billing", "Payment", "Confirmation"],
  orderDetails: {},
  cart: {
    discount: 0,
    items: {},
    maxPerPackage: 0,
    potentialQuantity: 1,
    price: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STEP:
      return updateObject(state, { currentStep: action.step });
    case actionTypes.MODIFY_POTENTIAL_QUANTITY:
      return updateObject(state, {
        cart: action.input
      });
    case actionTypes.MODIFY_CART:
      return updateObject(state, {
        cart: action.cart
      });
    default:
      return state;
  }
};
