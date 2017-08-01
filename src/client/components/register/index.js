import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { setToaster } from '../toaster/actions';
import { addUserForm, addUserInBack } from './actions';
import WizardFirstPage from './wizardfirst';
import WizardSecondPage from './wizardsecond';
import WizardThirdPage from './wizardthird';
import Spinner from '../../containers/spinner';
import { defaultRoute } from '../../routes';
import Header from '../../containers/headers';
import MyToaster from '../toaster';
import './register.css';

class Register extends Component {

  state = {
    showToaster: true,
    page: 1,
  }
  componentWillMount() {
    const { user, history } = this.props;
    if (user) history.replace(defaultRoute().path);
  }

  componentWillReceiveProps(props) {
    const { user } = props;
    const { setToaster } = this.props;
    const { showToaster } = this.state;
    console.log(user);
    if (!user) return null;
    if (!user.confirmed && user.status === 'response' && showToaster) {
      this.setState({ showToaster: false });
      setToaster({ message: 'Please check your email for confirmation', intent: 'success' });
    }
  }

  handleSubmit = (values) => {
    console.log('HANDLE SUBMIT');
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
    const { user: { status = '', confirmed } = '' } = this.props;
    return (
      <div>
        <MyToaster />
        <Header />
        <div className="home-container">
          { status !== 'pending' && page === 1 && <WizardFirstPage onSubmit={this.nextPage} /> }
          { status !== 'pending' && page === 2 && <WizardSecondPage previousPage={this.previousPage} onSubmit={this.nextPage} /> }
          { status !== 'pending' && page === 3 && <WizardThirdPage previousPage={this.previousPage} onSubmit={this.handleSubmit} /> }
          { status === 'pending' && <Spinner />}
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
