import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentStep: "Cart",
  steps: ["Cart", "Shipping", "Billing", "Payment", "Confirmation"],
  orderDetails: {
    sameAsShipping: false,
    billing: {
      company: "",
      country: "",
      email: "",
      name: "",
      phone: "",
      postalZip: "",
      provinceState: "",
      streetAddress: ""
    },
    shipping: {
      company: "",
      country: "",
      email: "",
      name: "",
      phone: "",
      postalZip: "",
      provinceState: "",
      streetAddress: ""
    },
    payment: {
      selectedOption: ""
    }
  },
  cart: {
    // reOrder: false,
    discount: 0,
    items: {},
    maxPerPackage: 500,
    potentialQuantity: 1,
    price: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STEP:
      return updateObject(state, { currentStep: action.step });
    case actionTypes.MODIFY_ORDER_DETAILS:
      return updateObject(state, { orderDetails: action.orderDetails });
    case actionTypes.MODIFY_POTENTIAL_QUANTITY:
      return updateObject(state, {
        cart: action.input
      });
    case actionTypes.MODIFY_CART:
      return updateObject(state, {
        cart: action.cart
      });
    case actionTypes.CLEAR_CART:
      return updateObject(state, {
        cart: {
          discount: 0,
          items: {},
          maxPerPackage: 500,
          potentialQuantity: 1,
          price: 0
        }
      });
    default:
      return state;
  }
};
