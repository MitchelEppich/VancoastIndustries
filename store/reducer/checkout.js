import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    currentStep: "Cart",
    steps: ["Cart", "Shipping", "Billing", "Payment", "Confirmation"]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_STEP:
            return updateObject(state, { currentStep: action.step });
        default:
            return state;
    }
};
