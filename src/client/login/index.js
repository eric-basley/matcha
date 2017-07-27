import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { createStructuredSelector, createSelector } from 'reselect';
import { loginRequest } from './actions';
import { defaultRoute } from '../routes';
import './login.css';

class Login extends Component {
  state = {
    login: '',
    password: '',
  };

  componentWillMount() {
    const { user, history } = this.props;
    if (user) history.replace(defaultRoute().path);
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { loginRequest } = this.props;
    const { login, password } = this.state;
    loginRequest({ login, password });
  };

  render() {
    const { login, password } = this.state;
    return (
      <div>
        <div className="navbar-top-right"><NavLink to="/auth/register" className="button">Pas encore Membre?</NavLink></div>
        <div className="register-container">
          <form className="register-form-container" onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <h2>Login</h2>
            <input className="input--text" type="text" name="login" placeholder="Login" value={login} />
            <input className="input--text" type="password" name="password" placeholder="Password" value={password} />
            <button type="submit" className="button">Login!</button><br />
            <NavLink to="forget_password" className="second--button">Mot de passe oublié ?</NavLink>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  user: PropTypes.object,
  history: PropTypes.object.isRequired,
};

const getState = (state) => state;

const mapStateToProps = createStructuredSelector({
    // error: createSelector([getState], (state) => state),
//   didRequested: createSelector([getState], (state) => state.didRequested),
//   response: createSelector([getState], (state) => state.response),
});

const mapDispatchToProps = {
  loginRequest,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
