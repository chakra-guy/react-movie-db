import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import './App.css';

import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import Message from './components/Message';

const middleware = [
  thunk,
  logger,
];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">

        <header className="App-header">
          <h3>Movie DB</h3>
          <Link to="/">Homepage</Link>
          <Link to="/test">test</Link>
        </header>

        <Message />

        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>

      </div>
    </Router>
  </Provider>
);

export default App;
