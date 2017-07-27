import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { addUser } from './actions';
import View from './view';

const getState = (state) => state.serverInfo;

const mapStateToProps = createStructuredSelector({
  error: createSelector([getState], (state) => state.error),
  didRequested: createSelector([getState], (state) => state.didRequested),
});

const mapDispatchToProps = {
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
