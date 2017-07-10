import React from 'react';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './auth.css';
import Login from './login';
import Register from './register';
import ResetPassword from './resetPassword';
import AboutMe from './aboutme';

const Authentication = ({ match: { path } }) => (
  <div className="home-container">
    <Route path={`${path}/login`} component={Login} />
    <Route path={`${path}/register`} component={Register} />
    <Route path={`${path}/about_me`} component={AboutMe} />
    <Route path={`${path}/reset_password`} component={ResetPassword} />
  </div>
);

Authentication.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Authentication;
