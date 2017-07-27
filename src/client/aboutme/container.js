import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { updateUser } from './actions';
import View from './view';

const getStateServer = (state) => state.serverInfo;
const getState = (state) => state.currentUser;
const mapStateToProps = createStructuredSelector({
  matchaToken: createSelector([getState], (state) => state.matchaToken),
  didRequested: createSelector([getStateServer], (state) => state.didRequested),
});

const mapDispatchToProps = {
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
