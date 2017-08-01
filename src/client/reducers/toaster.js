import { SET_TOASTER } from '../components/toaster/actions';

const initialState = {
  message: '',
};

const toaster = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_TOASTER:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};

export default toaster;
