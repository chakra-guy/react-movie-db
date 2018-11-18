const MOVIE_DB_API = 'https://api.themoviedb.org/3';
const API_KEY = '5f62a0c2124035cf2196a0a11f03a258';

export const SUGGEST_MOVIE_IN_SEARCH = 'SUGGEST_MOVIE_IN_SEARCH';

export const suggestMoviesInSearch = keyword => async (dispatch) => {
  fetch(`${MOVIE_DB_API}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`)
    .then(res => res.json())
    .then(suggestions => dispatch({
      type: SUGGEST_MOVIE_IN_SEARCH,
      payload: suggestions.results,
    }));
};
