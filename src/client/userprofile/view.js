import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
import './userprofile.css';
import '../authentication/auth.css';
import PropTypes from 'prop-types';
class View extends Component {
  state = {
    id: null,
    connected: false,
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    const { userGet } = this.props;
    this.setState({ id });
    console.log(id);
    userGet(id);
    // console.log;
  }


  render() {
    const { userLoaded } = this.props;
    if (!userLoaded) return (<div>is Fetching...</div>);
    // console.log(userLoaded);
    return (
      <div className="container">
        <div className="navbar-top-right">
          <NavLink to="register" className="button">Account</NavLink>
          <NavLink to="register" className="button">Logout</NavLink>
          </div>
        <div className="user_page">
            {userLoaded.connected.includes(userLoaded.id) ? <p className="online">Online</p> : <p className="offline">Offline</p> }
          <div className="round" >
            <img src={userLoaded.photo_5} alt="okok" />
          </div>
          <div className="header">
            <h1>{userLoaded.firstname} {userLoaded.lastname} 
              {userLoaded.sexe === 'men' ? <span className="blue">&#9794;</span> : <span className="pink">&#9792;</span>}
            </h1>
            <h2>{userLoaded.age} years old</h2>
            <h2>Looking for {userLoaded.orientation === 'bisexual' && <span><span className="blue">&#9794;</span><span className="pink">&#9792;</span></span>}
            {userLoaded.orientation === 'homosexual' && userLoaded.sexe === 'men' && <span className="blue">&#9794;</span>}
            {userLoaded.orientation === 'homosexual' && userLoaded.sexe === 'women' && <span className="pink">&#9792;</span>}
            {userLoaded.orientation === 'heterosexual' && userLoaded.sexe === 'men' && <span className="pink">&#9792;</span>}
            {userLoaded.orientation === 'heterosexual' && userLoaded.sexe === 'women' && <span className="blue">&#9794;</span>}
            </h2>
            <h2>{userLoaded.popularity}% popularity</h2>
            {/*<p>{userLoaded.age} ans . {userLoaded.distance} meters away . {userLoaded.popularity} score</p>*/}
            <h2>Facts about me: {userLoaded.bio}</h2><br />
            <h2>Interested by: {userLoaded.interest}</h2><br />
            <button className="button">Like</button>
            <button className="button">Chat</button>
          </div>
        </div>
      </div>
    );
  }
}

View.propTypes = {
  match: PropTypes.object.isRequired,
};

export default View;
