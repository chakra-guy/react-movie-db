import { combineReducers } from 'redux';

import movies from './MovieReducer';
import search from './SearchReducer';

const rootReducer = combineReducers({
  movies,
  search,
});

export default rootReducer;
