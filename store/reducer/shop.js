import actionTypes from "../actions";
import { updateObject } from "../utility";
import {
  strains,
  brands,
  filters,
  activeFilters
} from "../../server/data/temp_data";

const initialState = {
  currentProduct: null,
  showFilters: false,
  brands: brands,
  activeBrandIndex: 0,
  filters: filters,
  activeFilters: activeFilters,
  quickViewModal: null,
  quickViewProduct: null,
  showQuickViewProduct: false,
  animationActive: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FILTER_VISIBILITY:
      return updateObject(state, { showFilters: action.isFilterVisible });
    case actionTypes.SET_BRAND_INDEX:
      return updateObject(state, { activeBrandIndex: action.input });
    case actionTypes.SET_STRAINS:
      return updateObject(state, { strains: action.strains });
    case actionTypes.TOGGLE_FILTER:
      return updateObject(state, { activeFilters: action.activeFilters });
    case actionTypes.PURGE_ACTIVE_FILTERS:
      return updateObject(state, {
        activeFilters: action.activeFilters
      });
    case actionTypes.TOGGLE_MODAL:
      return updateObject(state, {
        quickViewModal: action.product
      });
    case actionTypes.SET_QUICK_VIEW:
      return updateObject(state, {
        quickViewProduct: action.quickViewProduct,
        showQuickViewProduct: !action.showQuickViewProduct,
        currentProduct: action.currentProduct
      });
    case actionTypes.TOGGLE_ANIMATION:
      return updateObject(state, { animationActive: action.active });
    default:
      return state;
  }
};
