import {SET_CURRENT_USER} from './types';

const initialState = {
  currentUser: ''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {...state, currentUser: action.payload};
    default:
      return state;
  }
};
