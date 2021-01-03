import {SET_PRODUCTS} from './types';

const initialState = {
  productsList: []
};

export const databaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, productsList: action.payload};
    default:
      return state;
  }
};
