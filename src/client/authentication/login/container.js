import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { connectUser, connectedUser } from './actions';
import View from './view';

const getError = (state) => state.serverInfo;

const mapStateToProps = createStructuredSelector({
  error: createSelector([getError], (state) => state.error),
  didRequested: createSelector([getError], (state) => state.didRequested),
  response: createSelector([getError], (state) => state.response),
});

const mapDispatchToProps = {
  connectUser,
  connectedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
