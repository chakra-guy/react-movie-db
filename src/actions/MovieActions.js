const MOVIE_DB_API = 'https://api.themoviedb.org/3';
const API_KEY = '5f62a0c2124035cf2196a0a11f03a258';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

export function fetchMovies() {
  return async (dispatch) => {
    try {
      const res = await fetch(`${MOVIE_DB_API}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
      const movies = await res.json();
      return dispatch({
        type: FETCH_MOVIES,
        payload: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function fetchMovie(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(`${MOVIE_DB_API}/movie/${id}?api_key=${API_KEY}&language=en-US`);
      const movie = await res.json();
      return dispatch({
        type: FETCH_MOVIE,
        payload: movie,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function resetMovie() {
  return {
    type: RESET_MOVIE,
  };
}

// export function suggestMoviesInSearch(keyword) {
//   console.log(`suggestMoviesInSearch(${keyword})`);

//   const id = '338952';

//   return async (dispatch) => {
//     try {
//       console.log('trying fetch');
//       const res = await fetch(`${MOVIE_DB_API}/movie/${id}?api_key=${API_KEY}&language=en-US`);
//       const suggestions = await res.json();
//       return dispatch({
//         type: SUGGEST_MOVIE_IN_SEARCH,
//         payload: suggestions.results,
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   };
// }
