import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import currentUser from './currentUser';
import toaster from './toaster';

const rootReducer = combineReducers({
  form: formReducer,
  currentUser,
  toaster,
});

export default rootReducer;
