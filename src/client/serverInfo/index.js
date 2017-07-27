const EVTX_ERROR = 'EvtX:Error';
const EVTX_RESP = 'evtx:respo';
const initialState = {
  error: '',
  didRequested: false,
  response: '',
};

export default (state = initialState, action) => {
  switch (action.type.slice(0, 10)) {
    case EVTX_ERROR:
      if (!action.status) return { ...state, error: '201', didRequested: true };
      if (typeof action.status === 'number') return { ...state, error: action.status.toString(), didRequested: true };
      return { ...state, error: action.status, didRequested: true };
    case EVTX_RESP:
      return { ...state, didRequested: true, error: '', response: action.type };
    default:
      return { ...state, error: '', didRequested: false };
  }
};
