import {
  USER_LOGIN_SUCCESS,
} from './constants';

export function loginSuccess(id, name, users, teams) {
  return {
    type: USER_LOGIN_SUCCESS,
    user: {
      id,
      name,
    },
    users,
    teams,
  };
}
