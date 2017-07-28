import { combineReducers } from 'redux';
import currentUser from './currentUser';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  currentUser,
});

export default rootReducer;
