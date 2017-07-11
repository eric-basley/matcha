import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../auth.css';

class View extends Component {
  state = {

  };

  componentWillMount() {
  }

  render() {
    return (
      <div>
        SUGGESTION
      </div>
    );
  }
}

View.propTypes = {
  // user: PropTypes.user.isRequired,
  suggestionUser: PropTypes.func.isRequired,
};

export default View;
