import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { suggestionUser } from './actions';
import View from './view';

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
  suggestionUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
