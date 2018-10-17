import { FETCH_MOVIES, FETCH_MOVIE, RESET_MOVIE } from '../actions/MovieActions';

const initialState = {
  moviesLoaded: false,
  moviesLoadedAt: null,
  movies: [],
  movieLoaded: false,
  movie: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        moviesLoaded: true,
        moviesLoadedAt: new Date(),
        movies: payload,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movieLoaded: true,
        movie: payload,
      };
    case RESET_MOVIE:
      return {
        ...state,
        movieLoaded: false,
        movie: {},
      };
    default:
      return state;
  }
}
