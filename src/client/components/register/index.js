import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
// import { addUser } from './actions';
import WizardFirstPage from './wizardfirst';
import WizardSecondPage from './wizardsecond';
import WizardThirdPage from './wizardthird';
import './register.css';

class Register extends Component {

  state = {
    page: 1,
  };

  handleSubmit = (values) => {
    console.log('HANDLE SUBMIT');
    console.log(values);
    // addUser({ login, email, password, firstname, lastname, sexe, age });
  };

  previousPage = () => {
    const { page } = this.state;
    this.setState({ page: page - 1 });
  }

  nextPage = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        <nav className="pt-navbar">
          <div className="pt-navbar-group pt-align-left" />
          <div className="pt-navbar-group pt-align-right" >
            <span className="pt-navbar-divider" />
            <NavLink to="/login"><button className="pt-button pt-minimal pt-icon-log-in" /></NavLink>
          </div>
         </nav>
        <div className="home-container">
          { page === 1 && <WizardFirstPage onSubmit={this.nextPage} /> }
          { page === 2 && <WizardSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} /> }
          { page === 3 && <WizardThirdPage previousPage={this.previousPage} onSubmit={this.handleSubmit} /> }
        </div>
      </div>
    );
  }
}

Register.propTypes = {
};


const getState = (state) => state.currentUser;

const mapStateToProps = createStructuredSelector({
  // user: createSelector([getState], (state) => state.user),
  // error: createSelector([getState], (state) => state.error),
  // didRequested: createSelector([getState], (state) => state.didRequested),
});

const mapDispatchToProps = {
  // addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
