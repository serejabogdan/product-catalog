import {SET_PRODUCTS, SET_ID_SELECTED_PRODUCT} from './types';

const initialState = {
  productsList: [],
  idSelectedProduct: ''
};

export const databaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, productsList: action.payload};
    case SET_ID_SELECTED_PRODUCT:
      return {...state, idSelectedProduct: action.payload};
    default:
      return state;
  }
};
