import { combineReducers } from 'redux';

import message from './MessageReducer';
import movies from './MovieReducer';

const rootReducer = combineReducers({
  message,
  movies,
});

export default rootReducer;
