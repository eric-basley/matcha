import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import socketIO from 'socket.io-client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store';
import Authentication from './authentication';
import Suggestion from './suggestion';
import UserProfile from './userprofile';
import Root from './root';

const url = 'http://127.0.0.1:3004';
const io = socketIO.connect(url);
io.on('disconnect', () => console.log('socket.io disconnected ...')); // eslint-disable-line no-console
io.on('error', err => console.log(`socket.io error: ${err}`)); // eslint-disable-line no-console
io.on('connect', () => console.log('socket.io connected.')); // eslint-disable-line no-console
const matchaToken = localStorage.getItem('matchaToken');
const id = localStorage.getItem('id');
// console.log(matchaToken);
const initialState = {
  login: { matchaToken, id },
};

const store = configureStore(initialState, io);

const App = () => {
  return (<Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Root} />
        <Route path="/auth" component={Authentication} />
        <Route path="/suggestion" component={Suggestion} />
        <Route path="/user/:id" component={UserProfile} />
         {/*<Route path="/home" component={Home} /> */}
      </div>
    </Router>
  </Provider>
  )
};
// console.log('mounting React ...'); // eslint-disable-line no-console
const mountNode = window.document.getElementById('__MATCHA__');
render(<App />, mountNode);
