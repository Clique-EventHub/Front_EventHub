import { combineReducers } from 'redux';
import postReducer from './reducer_post';
import fetchReducer from './reducer_fetch';
import deleteReducer from './reducer_delete';

const rootReducer = combineReducers({
  post: postReducer,
  fetch: fetchReducer,
  delete: deleteReducer
});

export default rootReducer;
