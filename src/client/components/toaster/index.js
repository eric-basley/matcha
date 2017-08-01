import React, { Component } from 'react';
import { createStructuredSelector, createSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Toaster, Intent} from '@blueprintjs/core';
import { connect } from 'react-redux';
import { setToaster } from './actions';

class MyToaster extends Component {

  state = {
    message: '',
    show: false,
  }

  componentWillMount() {
    console.log('ok');
    console.log(this.props);
    const { message } = this.props;
    console.log(message);
    if (message && !this.state.show) {
      this.setState({ message });
      this.setState({ show: true });
      this.toaster = Toaster.create(this.state);
      this.showToaster();
    }
  }

  componentWillReceiveProps(props) {
    console.log('compoentWillReceivePros');
    console.log(this.props);

  }


  showToaster = () => {
    const options = { ...this.state, ...this.props };
    const { message, intent = 'danger', className } = options;
    this.resetToaster();
    this.toaster.show({ message, className, intent: Intent[intent.toUpperCase()] });
  }

  resetToaster = () => {
    const { setToaster } = this.props;
    this.setState({ show: false });
    setToaster({ message: '' });
  }

  render() {
    return null;
  }
}


MyToaster.propTypes = {
  setToaster: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

const getState = (state) => state.toaster;

const mapStateToProps = createStructuredSelector({
  message: createSelector([getState], (state) => state.message),
});

const mapDispatchToProps = {
  setToaster,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyToaster);
