/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

import ShopReducer from "./shop";
import CheckoutReducer from "./checkout";
import AccountReducer from "./account";

const initialState = {
    showCart: false
};

const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_CART:
            return updateObject(state, { showCart: action.bool });
        default:
            return state;
    }
};

export default combineReducers({
    misc: indexReducer,
    shop: ShopReducer,
    checkout: CheckoutReducer,
    account: AccountReducer
});
