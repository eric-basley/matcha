import { combineReducers } from 'redux';
import listUser from '../suggestion/reducer';
import serverInfo from '../serverInfo';
import userGet from '../userprofile/reducer';
import { GOTUSER } from '../account/actions';

const rootReducer = combineReducers({
  currentUser: (state = {}, action) => {
    switch (action.type) {
      case GOTUSER:
        return { ...state, user: action.payload };
      default:
        return state;
    }
  },
  userGet,
  listUser,
  serverInfo,
});

export default rootReducer;
