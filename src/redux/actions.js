import {SET_CURRENT_USER, SET_PRODUCTS, SET_ID_SELECTED_PRODUCT} from './types';

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

export function setIdSelectedProduct(product) {
  return {
    type: SET_ID_SELECTED_PRODUCT,
    payload: product
  };
}
