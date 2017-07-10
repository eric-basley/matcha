import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../auth.css';

class View extends Component {
  state = {
    login: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    sexe: '',
    age: 0,
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { addUser } = this.props;
    const { login, email, password, firstname, lastname, sexe, age } = this.state;
    addUser({ login, email, password, firstname, lastname, sexe, age });
  };
  render() {
    const { login, email, password, firstname, lastname, sexe, age } = this.state;
    return (
      <div className="register-container">
        <form className="register-form-container" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <h2>Inscription</h2>
          <p><input type="text" name="login" placeholder="Login" value={login} /></p>
          <p><input type="email" name="email" placeholder="Email" value={email} /></p>
          <p><input type="password" name="password" placeholder="Password" value={password} /></p>
          <p><input type="text" name="firstname" placeholder="First Name" value={firstname} /></p>
          <p><input type="text" name="lastname" placeholder="Last Name" value={lastname} /></p>
          <p><span>Sexe: </span><select name="sexe" value={sexe}>
            <option value="men">men</option>
            <option value="women">women</option></select></p>
          <p><span>Age: </span><select name="age" value={age}>
            <option value="19">19</option>
            <option value="20">20</option></select></p>
          <button type="submit" >Inscription!</button>
        </form>
      </div>
    );
  }
}

View.propTypes = {
  addUser: PropTypes.func.isRequired,
};
export default View;
