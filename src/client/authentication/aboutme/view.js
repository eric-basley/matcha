import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import '../auth.css';

class View extends Component {
  state = {
    orientation: '',
    bio: '',
    tag: '',
    error: null,
    canUpdate: false,
    imgProfile: '',
    interest: [],
  };

  handleChange = ({ target: { value, name, files } }) => {
    if (name === 'imgProfile') {
      const file = files[0];
      const _URL = window.URL || window.webkitURL;
      const img = new Image();
      img.onload = () => {
        this.setState({ canUpdate: true });
        this.setState({ imgProfile: file });
      };
      img.onerror = () => this.setState({ error: 'not an image' });
      img.src = _URL.createObjectURL(file);
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
    const { updateUser, matchaToken } = this.props;
    const { canUpdate, orientation, bio, interest, imgProfile } = this.state;
    if (canUpdate) {
      const formData = new FormData();
      formData.append('imgProfile', imgProfile);
      formData.append('matchaToken', matchaToken);
      axios({
        url: 'http://127.0.0.1:3004/add_img',
        method: 'post',
        data: formData,
        headers: {
          'Content-type': 'multipart/form-data',
        },
      }).then(() => {
        updateUser({ orientation, bio, interest });
      }).catch(() => this.setState({ serverResponse: 'AN ERROR OCCURRED' }));
    }
  };

  render() {
    const { bio, tag, interest, imgProfile } = this.state;
    return (
      <div className="register-container">
        <div className="register-form-container" onChange={this.handleChange}>
          <h2>One more step!</h2>
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
          <input id="file" name="imgProfile" className="input-file" type="file" accept="image/*" /><br />
          { imgProfile && <button type="submit" onClick={this.handleSubmit} className="button" >Continue!</button> }
        </div>
      </div>
    );
  }
}

View.propTypes = {
  matchaToken: PropTypes.string.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default View;
