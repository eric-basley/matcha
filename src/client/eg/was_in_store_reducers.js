import { combineReducers } from 'redux';
import addUser from '../authentication/register/reducer';

const rootReducer = combineReducers({
  addUser,
});

export default rootReducer;
