import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    showFilters: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_FILTERS:
            return updateObject(state, { showFilters: action.bool });
        default:
            return state;
    }
};
