import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovies } from '../actions/MovieActions';

import Movie from './Movie';

class MovieList extends Component {
  componentDidMount() {
    const { fetchMovies, isLoaded, isLoadedAt } = this.props;
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || (new Date() - new Date(isLoadedAt)) > oneHour) {
      fetchMovies();
    }
  }

  render() {
    const { movies, fetchMovies } = this.props;
    return (
      <MovieGrid>
        <button type="submit" onClick={fetchMovies}>hard reload movies</button>
        {movies.map(movie => (<Movie key={movie.id} movie={movie} />))}
      </MovieGrid>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: state.movies.moviesLoaded,
  isLoadedAt: state.movies.moviesLoadedAt,
  movies: state.movies.movies,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
