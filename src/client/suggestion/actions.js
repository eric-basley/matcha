export const SUGGESTION_USER = 'evtx:server:users:suggestion';
export const USER_SUGGESTED = 'userSuggested';
export const suggestionUser = (user) => ({ type: SUGGESTION_USER, payload: user, replyTo: USER_SUGGESTED });
