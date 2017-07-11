import { SUGGESTION_USER } from './actions';

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUGGESTION_USER:
      return state;
    default:
      return state;
  }
};
