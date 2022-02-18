import {createStore} from 'redux';
import {AppReducers} from './reducers';

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

let store = createStore(rootReducer);

export default store;
