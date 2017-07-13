import { combineReducers } from 'redux';
// import addUser from '../authentication/register/reducer';

const rootReducer = combineReducers({
  login: (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
  // listUser: (state = {}, action) => {
  //   switch (action.type) {
  //     case SUGGESTION_USER:
  //       return { ...state, listUser: action.payload.listUser};
  //   }
  // }
});

export default rootReducer;
