import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Root extends Component {
  state = {
    userConnected: false,
  };

  render() {
    const { userConnected } = this.state;
    const { pathname } = this.props.location;
    return (
      <div>
        {userConnected === false &&
          pathname.match(/^\/auth\/?/) === null &&
          <Redirect to="/auth/register" />}
        {userConnected === true &&
          pathname.match(/^\/auth\/?/) !== null &&
          <Redirect to="/home/" />}
      </div>
    );
  }
}

Root.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Root;
