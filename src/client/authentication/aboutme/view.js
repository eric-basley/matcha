import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../auth.css';

class View extends Component {
  state = {
    orientation: '',
    bio: '',
    tag: '',
    img: '',
    interest: [],
  };

  handleChange = ({ target: { value, name, files } }) => {
    if (name === 'img') {
      const fileReader = new FileReader();
      const img = files[0];
      fileReader.onloadend = () => {
        this.setState({ img });
      };
      fileReader.readAsDataURL(img);
    }
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

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { updateUser } = this.props;
    const { orientation, bio, interest: interestArray, img } = this.state;
    const interest = JSON.stringify(interestArray);
    updateUser({ orientation, bio, interest, img });
  };

  render() {
    const { bio, tag, interest, img } = this.state;
    return (
      <div className="register-container">
        <div className="register-form-container" onChange={this.handleChange}>
          <h2>One more steps!</h2>
          <input id="heterosexual" type="radio" name="orientation" value="heterosexual" onClick={this.handleChange} className="float-left" />
          <label htmlFor="heterosexual" className="float-left label-radio">Heterosexual</label>
          <input id="homosexual" type="radio" name="orientation" value="homosexual" onClick={this.handleChange} className="float-left" />
          <label htmlFor="homosexual" className="float-left  label-radio">Homosexual</label>
          <input id="bisexual" type="radio" name="orientation" value="bisexual" onClick={this.handleChange} className="float-left" />
          <label htmlFor="bisexual" className="float-left  label-radio">Bisexual</label><br />
          <textarea name="bio" rows="3" cols="30" maxLength="1000" placeholder="Tell us something about You" value={bio} className="textarea" />
          <input type="text" className="input--text" name="interest" placeholder="Tags" onKeyUp={this.addInterest} value={tag} />
          <ul className="tagsField">
            {interest.map(elm => (
              <div className="tagField" value={elm} key={elm}>#{elm}</div>
            ))}
          </ul>
          <label htmlFor="file" className="label-file">Choisir une photo de profil</label>
          <input id="file" name="img" className="input-file" type="file" accept="image/*" /><br />
          { img && <button type="submit" onClick={this.handleSubmit} className="button" >Continue!</button> }
        </div>
      </div>
    );
  }
}

View.propTypes = {
  updateUser: PropTypes.func.isRequired,
};

export default View;
