import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Auth from './auth-view';
import { addUser } from './actions';

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = {
  addUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
