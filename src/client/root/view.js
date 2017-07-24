import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Root extends Component {

  componentWillMount() {
    const { ifUserCheckConnected, matchaToken } = this.props;
    if (matchaToken) ifUserCheckConnected();
  }

  render() {
    const { user, connected, error, matchaToken } = this.props;
    const { pathname } = this.props.location;
    if (error) return <div>{ alert('Error Happens') }</div>; //eslint-disable-line
    // if (!user) return <Redirect to="/auth/register" />;
    if (!user) return <div>is Fetching...</div>;
    return (
      <div>
        { !user && !matchaToken && pathname.match(/^\/auth\/reset_password/) === null && <Redirect to="/auth/register" />}
        { !user.confirmed && <Redirect to="/auth/login" />}
        { !connected && <Redirect to="/auth/login" />}
        { connected && !user.bio && <Redirect to="/auth/about_me" /> }
        { connected && user.bio && <Redirect to="/suggestion" />}
      </div>
    );
  }
}

Root.propTypes = {
  user: PropTypes.object.isRequired,
  connected: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
  matchaToken: PropTypes.string.isRequired,
  ifUserCheckConnected: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default Root;
