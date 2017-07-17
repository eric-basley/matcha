import React, { Component } from 'react';
import { NavLink, Redirect} from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './suggestion.css';

class View extends Component {

  state = {
    redirect: false,
  }

  componentWillMount() {
    const { suggestionUser } = this.props;
    suggestionUser();
  }

  handleClick = ({ target: { id } }) => {    // console.log(id);
    this.setState({ redirect: id });
  }

  render() {
    const { listUser } = this.props;
    const { redirect } = this.state;
    console.log(redirect);
    // console.log(this.props);
    return (
      <div>
        { redirect && <Redirect push to={`user/` + redirect} /> }
        <div className="navbar-top-right"><NavLink to="continue" className="button">Continue</NavLink></div>
        <h2 className="bold center">Some profile you may like</h2>
        <div className="container-suggestion">
          { listUser.map(user => (
            <div className="suggestion-box" onClick={this.handleClick} role="button" key={user.id} id={user.id}>
              <img src={user.photo_5} alt="profile--1" className="picture--suggestion" id={user.id} />
              <div className="name-bio-suggestion" id={user.id}><span className="bold" id={user.id}>{user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}</span>, {user.age}</div>
              <div className="name-bio-suggestion" id={user.id}>Tell me about you...</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

View.propTypes = {
  // user: PropTypes.user.isRequired,
  suggestionUser: PropTypes.func.isRequired,
};

export default View;
