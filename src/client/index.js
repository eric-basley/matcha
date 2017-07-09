import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store';
import Auth from './auth/container';
// import Authors from './authors/container';

const initialState = {};
const store = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/auth" component={Auth} />
    </Router>
  </Provider>
);

console.log('mounting React ...'); // eslint-disable-line no-console
const mountNode = window.document.getElementById('__MATCHA__');
render(<App />, mountNode);
