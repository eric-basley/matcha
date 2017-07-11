import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { connectUser } from './actions';
import View from './view';

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
  connectUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
