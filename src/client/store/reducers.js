import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentUser: (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
});

export default rootReducer;
