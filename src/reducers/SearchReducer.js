import { SUGGEST_MOVIE_IN_SEARCH } from '../actions/SearchActions';

const initialState = {
  suggestions: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SUGGEST_MOVIE_IN_SEARCH:
      return {
        ...state,
        suggestions: payload,
      };

    default:
      return state;
  }
}
