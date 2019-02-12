import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
    CHANGE_STEP: "CHANGE_STEP"
};

const getActions = uri => {
    const objects = {
        changeStep: step => {
            return {
                type: actionTypes.CHANGE_STEP,
                step: step
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
