import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addUser } from './actions';
import View from './view';

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
