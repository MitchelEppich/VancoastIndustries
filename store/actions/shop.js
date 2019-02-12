import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
    TOGGLE_FILTERS: "TOGGLE_FILTERS"
};

const getActions = uri => {
    const objects = {
        toggleFilters: bool => {
            return {
                type: actionTypes.TOGGLE_FILTERS,
                bool: bool
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
