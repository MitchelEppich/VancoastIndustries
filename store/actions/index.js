/*******************************************/
/*Index Actions for all miscellaneous related
dispatch actions. All other actiontypes are
imported into this file, to then be exported
for the reducers and corresponding pages.*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import Shop from "./shop";

const uri = "http://localhost:3000/graphql";

const imports = {
    ...Shop(uri)
};

const actionTypes = {
    TOGGLE_CART: "TOGGLE_CART"
};

const actions = {
    toggleCart: bool => {
        return {
            type: actionTypes.TOGGLE_CART,
            bool: bool
        };
    }
};

const query = {};

const mutation = {};

export default {
    // TYPES
    ...actionTypes,
    // IMPORTS
    ...imports,
    // ACTIONS
    ...actions
};
