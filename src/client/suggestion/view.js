import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './suggestion.css';

class View extends Component {
  state = {

  };
  click = () => {
    console.log('click');
  }
  componentWillMount() {
  }

  render() {
    return (
      <div>
        <div className="navbar-top-right"><NavLink to="continue" className="button">Continue</NavLink></div>
        <h2 className="bold center">Some profile you may like</h2>
        <div className="container-suggestion">
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
            <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
          <div className="suggestion-box " onClick={this.click}>
            <img src="./profile-picture-1.png" alt="profile--1" className="picture--suggestion" />
          <div className="name-bio-suggestion"><span className="bold">Mathilde</span>, 26</div>
            <div className="name-bio-suggestion">Tell me about you...</div>
          </div>
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
