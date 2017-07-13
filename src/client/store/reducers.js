import { combineReducers } from 'redux';
import listUser from '../suggestion/reducer';
// import addUser from '../authentication/register/reducer';

const rootReducer = combineReducers({
  login: (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
  listUser,
});

export default rootReducer;
