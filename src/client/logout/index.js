import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

  componentWillMount() {
    localStorage.removeItem('matchaToken');
    window.location.reload();
  }
  render() {
    return (<div><Redirect to="/auth" /></div>);
  }
}

export default Logout;
