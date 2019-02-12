import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
    CHANGE_OPTION: "CHANGE_OPTION"
};

const getActions = uri => {
    const objects = {
        changeOption: option => {
            return {
                type: actionTypes.CHANGE_OPTION,
                option: option
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
