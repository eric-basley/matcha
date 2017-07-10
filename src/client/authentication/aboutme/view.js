import React, { Component } from 'react';
import R from 'ramda';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../auth.css';

class View extends Component {
  state = {
    orientation: '',
    bio: '',
    tag: '',
    // img: '',
    interest: [],
  };

  handleChange = ({ target: { value, name } }) => {
    if (name === 'interest') return this.setState({ tag: value });
    this.setState({ [name]: value });
  };

  addInterest = ({ target: { value }, keyCode }) => {
    if (keyCode === 13 && !value.match(/^\s*$/)) {
      const { interest } = this.state;
      if (!interest.includes(value)) {
        this.setState({
          interest: interest.concat([value]),
          tag: '',
        });
      }
    }
  };

  handleDelete = () => {
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { updateUser } = this.props;
    const { orientation, bio, interest: interestArray } = this.state;
    const interest = JSON.stringify(interestArray);
    updateUser({ orientation, bio, interest });
  };

  render() {
    const { orientation, bio, tag, interest } = this.state;
    return (
      <div className="register-container">
        <div className="register-form-container" onChange={this.handleChange}>
          <h2>One more steps!</h2>
          <p><span>Orientation: </span><select name="orientation" value={orientation}>
            <option value="heterosexual">Heterosexual</option>
            <option value="bisexual">Bisexual</option>
            <option value="homosexual">Homosexual</option></select></p>
          <p><textarea name="bio" rows="3" cols="30" maxLength="1000" placeholder="Tell us something about You" value={bio} /></p>
          <input className="bioarea" name="interest" placeholder="Tags" onKeyUp={this.addInterest} value={tag} />
          <ul className="tagsField">
            {interest.map(elm => (
              <div className="tagField" onClick={this.handleDelete(elm)} value={elm} key={elm}>#{elm}</div>
            ))}
          </ul>
          <p><input type="file" name="pic" accept="image/*" /></p>
          <p><button type="submit" onClick={this.handleSubmit}>Continue!</button></p>
          <NavLink to="reset_password">Mot de passe oublié ?</NavLink>
        </div>
      </div>
    );
  }
}

View.propTypes = {
  updateUser: PropTypes.func.isRequired,
};

export default View;
