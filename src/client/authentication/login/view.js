import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../auth.css';

class View extends Component {
  state = {
    login: '',
    password: '',
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
    return (
      <div className="register-container">
        <form className="register-form-container" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <h2>Login</h2>
          <p><input type="text" name="login" placeholder="Login" value={login} /></p>
          <p><input type="password" name="password" placeholder="Password" value={password} /></p>
          <button type="submit">Login!</button>
          <NavLink to="reset_password">Mot de passe oublié ?</NavLink>
        </form>
      </div>
    );
  }
}

View.propTypes = {
  connectUser: PropTypes.func.isRequired,
};

export default View;
