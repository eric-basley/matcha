import R from 'ramda';
import { USER_LOGOUT, USER_LOGGED } from '../login/actions';

const currentUser = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case USER_LOGOUT:
      return R.omit(['user', 'token'], state);
    case USER_LOGGED:
      const { payload: { user } } = action;
      return { ...state, user };
    default:
      return state;
  }
};

export default currentUser;
