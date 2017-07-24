const EVTX_ERROR = 'EvtX:Error';
const EVTX_RESP = 'evtx:respo';
const initialState = {
  error: false,
  didRequested: false,
};

export default (state = initialState, action) => {
  switch (action.type.slice(0, 10)) {
    case EVTX_ERROR:
      return { ...state, error: action.status, didRequested: true };
    case EVTX_RESP:
      return { ...state, didRequested: true };
    default:
      return state;
  }
};
