import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import list from './list';
import post from './post';

const rootReducer = combineReducers({
  list,
  post,
  pender: penderReducer
});

export default rootReducer;
