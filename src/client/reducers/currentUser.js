import R from 'ramda';
import { USER_LOGOUT, USER_LOGGED } from '../components/login/actions';
import { ADD_USER_FORM } from '../components/register/actions';

const currentUser = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case ADD_USER_FORM:
      return { ...state, user: R.omit(['password'], action.payload) };
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
