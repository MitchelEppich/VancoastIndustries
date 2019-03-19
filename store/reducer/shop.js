import actionTypes from "../actions";
import { updateObject } from "../utility";
import { strains, brands, filters } from "../../server/data/temp_data";

const initialState = {
  showFilters: false,
  brands: brands,
  strains: strains,
  activeBrandIndex: 0,
  showMobileMenu: false,
  filters: filters,
  activeFilters: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FILTER_VISIBILITY:
      return updateObject(state, { showFilters: action.isFilterVisible });
    case actionTypes.SET_BRAND_INDEX:
      return updateObject(state, { activeBrandIndex: action.index });
    case actionTypes.SET_STRAINS:
      return updateObject(state, { strains: action.strains });
    case actionTypes.TOGGLE_MOBILE_MENU:
      return updateObject(state, {
        showMobileMenu: action.isMobileMenuVisible
      });
    case actionTypes.TOGGLE_FILTER:
      return updateObject(state, { activeFilters: action.activeFilters });
    case actionTypes.PURGE_ACTIVE_FILTERS:
      return updateObject(state, { activeFilters: [] });
    default:
      return state;
  }
};
