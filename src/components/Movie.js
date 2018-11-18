import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <Link className="poster" to={`/${movie.id}`}>
    <img className="poster-image" src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    <h3 className="poster-title">{movie.title}</h3>
  </Link>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
