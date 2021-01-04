import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {databaseReducer} from './databaseReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  products: databaseReducer
});
