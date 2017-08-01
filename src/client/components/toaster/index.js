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

  // componentWillMount() {
  //   const { message } = this.props;
  //   if (message && !this.state.show) {
  //     this.setState({ message });
  //     this.setState({ show: true });
  //     this.toaster = Toaster.create(this.state);
  //     this.showToaster();
  //   }
  // }
  componentDidMount() {
    this.toaster = Toaster.create(this.state);
  }

   componentDidUpdate(props) {
      console.log(this.props);
    console.log(props);
    if (this.state.show) {
      this.showToaster();
    }
  }
  componentWillReceiveProps(props) {
    console.log(this.props);
    console.log(props);
    console.log(this.state);
     if (props.message && !this.state.show)
      this.setState({ show: true });
  }


  showToaster = () => {
    const options = { ...this.state, ...this.props };
    const { message, intent, className } = options;
    this.resetToaster();
    if (!intent) this.toaster.show({ message, className, intent: Intent.DANGER });
    else this.toaster.show({ message, className, intent: Intent[intent.toUpperCase()] });
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
