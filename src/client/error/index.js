const EVTX_ERROR = 'EvtX:Error';
const EVTX_SERVER = 'evtx:serve';
const initialState = {
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
      case EVTX_ERROR:
        return { ...state, error: action.status };
      default: 
      return state;
    }
};
