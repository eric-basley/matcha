import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { updateUser } from './actions';
import View from './view';

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
