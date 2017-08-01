import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { setToaster } from '../toaster/actions';
import { addUserForm, addUserInBack } from './actions';
import WizardFirstPage from './wizardfirst';
import WizardSecondPage from './wizardsecond';
import WizardThirdPage from './wizardthird';
import Spinner from '../../containers/spinner';
import './register.css';
import MyToaster from '../toaster';

class Register extends Component {

  state = {
    page: 1,
  };

  componentWillMount() {
    const { setToaster } = this.props;
    setToaster({ message: 'ok' }); 
  }
 
  handleSubmit = (values) => {
    console.log('HANDLE SUBMIT');
    console.log(values);
    const { addUserForm, addUserInBack } = this.props;
    addUserForm({ ...values, status: 'pending' });
    addUserInBack(values);
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
    const { user: { status, confirmed } } = this.props;
    return (
      <div>
          <MyToaster />
          <nav className="pt-navbar">
          <div className="pt-navbar-group pt-align-left" />
          <div className="pt-navbar-group pt-align-right" >
            <span className="pt-navbar-divider" />
            <NavLink to="/login"><button className="pt-button pt-minimal pt-icon-log-in" /></NavLink>
          </div>
         </nav>
        <div className="home-container">
          { status  !== 'pending' && page === 1 && <WizardFirstPage onSubmit={this.nextPage} /> }
          { status !== 'pending' && page === 2 && <WizardSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} /> }
          { status !== 'pending' && page === 3 && <WizardThirdPage previousPage={this.previousPage} onSubmit={this.handleSubmit} /> }
        </div>
      </div>
    );
  }
}

Register.propTypes = {
};


const getState = (state) => state.currentUser;
const getToasterState = (state) => state.toaster;

const mapStateToProps = createStructuredSelector({
  user: createSelector([getState], (state) => state.user),
  messageToaster: createSelector([getToasterState], (state) => state.message),
  // error: createSelector([getState], (state) => state.error),
  // didRequested: createSelector([getState], (state) => state.didRequested),
});

const mapDispatchToProps = {
  addUserForm,
  setToaster,
  addUserInBack,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
