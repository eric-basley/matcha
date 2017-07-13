export const USERS_GET = 'evtx:server:users:get';
export const userGet = (user) => ({ type: USERS_GET, payload: user });
