import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMovie, resetMovie } from '../actions/MovieActions';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  componentDidMount() {
    const { fetchMovie, isLoaded, match } = this.props;
    if (!isLoaded) {
      fetchMovie(match.params.id);
    }
  }

  componentWillUnmount() {
    const { resetMovie } = this.props;
    resetMovie();
  }

  render() {
    const { movie } = this.props;
    const backdrop = `${BACKDROP_PATH}${movie.backdrop_path}`;
    const styles = {
      backdrop: {
        background: `url(${backdrop}) no-repeat`,
      },
    };

    return (
      <div className="movie-detail-wrapper" style={styles.backdrop}>
        <div className="movie-detail-info">
          <img className="poster-image" src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: state.movies.movieLoaded,
  movie: state.movies.movie,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovie,
  resetMovie,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
