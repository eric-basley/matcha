import { connect } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { updateUser } from './actions';
import View from './view';

const getState = (state) => state.login;
const mapStateToProps = createStructuredSelector({
  matchaToken: createSelector([getState], (state) => state.matchaToken),
});

const mapDispatchToProps = {
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
