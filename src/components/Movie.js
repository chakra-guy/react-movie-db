import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={`${movie.id}`}>
      <PosterImage src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
    <h3>{movie.title}</h3>
  </Link>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export const PosterImage = styled.img`
  box-shadow: 0 0 35px black;
`;
