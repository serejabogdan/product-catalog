import {SET_CURRENT_USER, SET_PRODUCTS} from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
}

export function setProductsList(products) {
  return {
    type: SET_PRODUCTS,
    payload: products
  };
}
