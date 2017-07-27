import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { ifUserCheckConnected } from './action';
import View from './view';

const getStateUser = (state) => state.currentUser;
const getStateServer = (state) => state.serverInfo;
const mapStateToProps = createStructuredSelector({
  matchaToken: createSelector([getStateUser], (state) => state.matchaToken),
  error: createSelector([getStateServer], (state) => state.error),
  didRequested: createSelector([getStateServer], (state) => state.didRequested),
});

const mapDispatchToProps = {
  ifUserCheckConnected,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
