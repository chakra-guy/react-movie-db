import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Movie from './Movie';

class MovieList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=5f62a0c2124035cf2196a0a11f03a258&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();

      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.error(e); // eslint-disable-line
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <MovieGrid>
        {movies.map(movie => (
          <Link to={`/${movie.id}`}>
            <Movie key={movie.id} movie={movie} />
          </Link>
        ))}
      </MovieGrid>
    );
  }
}

export default MovieList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
