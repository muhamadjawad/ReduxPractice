import {combineReducers} from 'redux';
import counterReducer from './CounterReducer';
import counterAPI from './CounterAPI';

export const AppReducers = combineReducers({
  counterReducer,
  counterAPI,
});
