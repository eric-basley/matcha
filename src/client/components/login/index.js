import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { createStructuredSelector, createSelector } from 'reselect';
import { loginRequest } from './actions';
import { defaultRoute } from '../../routes';
import Header from '../../containers/headers';
import MyToaster from '../toaster';
import { Field, reduxForm } from 'redux-form';
import inputField from '../../containers/inputField';
import setToaster from '../toaster/actions';
import FormLogin from './form';
import '../register/register.css';
import R from 'ramda';

class Login extends Component {

  state = {
    showToaster: true,
  }

  componentWillMount() {
    const { user, history } = this.props;
    console.log(defaultRoute().path);
    if (user) history.replace(defaultRoute().path);
  }

  componentWillReceiveProps(props) {
    const { user } = props;
    const { setToaster } = this.props;
    const { showToaster } = this.state;
    if (!user) return null;
    if (!user.confirmed && user.status === 'response' && showToaster) {
      this.setState({ showToaster: false });
      setToaster({ message: 'Please check your email for confirmation', intent: 'success' });
    }
  }
  handleSubmit = ({ login, password }) => {
    const { loginRequest } = this.props;
    // const { login, password } = this.state;
    loginRequest({ login, password });

  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <MyToaster />
        <Header />
        <div className="home-container" >
          <FormLogin onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}


Login.propTypes = {
  // loginRequest: PropTypes.func.isRequired,
  // user: PropTypes.object,
  // history: PropTypes.object.isRequired,
};

const getState = (state) => state.currentUser;

const mapStateToProps = createStructuredSelector({
    user: createSelector([getState], (state) => state.user),
//   response: createSelector([getState], (state) => state.response),
});

const mapDispatchToProps = {
  loginRequest,
  setToaster,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
