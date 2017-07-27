import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { CONNECTED_USER } from './actions';
import { NavLink, Redirect } from 'react-router-dom';
import '../auth.css';

class View extends Component {
  state = {
    login: '',
    password: '',
    redirect: false,
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { connectUser } = this.props;
    const { login, password } = this.state;
    connectUser({ login, password });
  };

  render() {
    const { login, password } = this.state;
    const { didRequested, error, response } = this.props;
    console.log(`didRequested = ${didRequested}, error = ${error}`);
    // if (didRequested && !error && response === CONNECTED_USER) {
    //   return <Redirect to="/about_me" />;
    // }
     if (didRequested && !error) return <div> Redirect </div>;
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

View.propTypes = {
  didRequested: PropTypes.bool,
  error: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  connectUser: PropTypes.func.isRequired,
};

View.defaultProps = {
  didRequested: false,
};

export default View;
