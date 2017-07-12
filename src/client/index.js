import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store';
import Root from './root';
import Authentication from './authentication';
import Suggestion from './suggestion';
// import Authors from './authors/container';

const initialState = {};
const store = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        {/*<Route path="/" component={Root} />*/}
        <Route path="/auth" component={Authentication} />
        <Route path="/suggestion" component={Suggestion} />
        {/* <Route path="/home" component={Home} /> */}
      </div>
    </Router>
  </Provider>
);
console.log('mounting React ...'); // eslint-disable-line no-console
const mountNode = window.document.getElementById('__MATCHA__');
render(<App />, mountNode);
