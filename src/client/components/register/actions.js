export const ADD_USER_FORM = 'addUserForm';
export const ADDED_USER = 'evtx:response:addedUser';

export const addUserForm = (user) => ({ type: ADD_USER_FORM, payload: user });
