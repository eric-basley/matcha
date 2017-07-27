import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from 'axios';
import ErrorMsg from '../serverInfo/msg';

import './flashMessage.css';

class checkAuth extends Component {

  state = {
    isUserLoggedIn: null,
  }

  componentWillMount() {
    const { matchaToken } = this.props;
    axios.get('http://127.0.0.1:3004/auth', { params: { matchaToken } })
    .then(({ status }) => {
      if (status === 200) this.setState({ isUserLoggedIn: true });
      else this.setState({ isUserLoggedIn: false });
    });
  }

  render() {
    const { isUserLoggedIn } = this.state;
    const { error } = this.props;
    const { pathname } = this.props.location;
    // console.log(isUserLoggedIn, error, pathname);
    return (
      <div>
        { error && <ErrorMsg />}
        { isUserLoggedIn === false &&
          <Redirect to="/auth/login" />}
        { isUserLoggedIn === true &&
          pathname.match(/^\/?$/) !== null &&
          <Redirect to="/suggestion" />}
      </div>
    );
  }
}

checkAuth.propTypes = {
  matchaToken: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
};

export default checkAuth;
