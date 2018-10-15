import React, { Component } from 'react';
import './App.css';

import Movie from './components/Movie';

class App extends Component {
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
      console.error(e);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h3>Movie DB</h3>
        </div>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default App;
