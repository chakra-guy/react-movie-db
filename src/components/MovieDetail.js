import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

import { PosterImage } from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const { match } = this.props;
      const res = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=5f62a0c2124035cf2196a0a11f03a258&language=en-US`);
      const movie = await res.json();

      this.setState({
        movie,
      });
    } catch (e) {
      console.error(e); // eslint-disable-line
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <PosterImage src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background-color: white;
  text-align: left;
  padding: 0rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
