import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';

import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App = () => (
  <Router>
    <div className="App">

      <div className="App-header">
        <h3>Movie DB</h3>
        <Link to="/">Homepage</Link>
        <Link to="/test">test</Link>
      </div>

      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>

    </div>
  </Router>
);

export default App;
