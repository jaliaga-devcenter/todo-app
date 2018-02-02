/*
 *
 * LoginPage actions
 *
 */

import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from './constants';

export function signUp(provider, idToken, accessToken) {
  return {
    type: SIGNUP,
    provider,
    idToken,
    accessToken,
  };
}

export function signUpError(error) {
  return {
    type: SIGNUP_ERROR,
    error,
  };
}

export function login(provider, accessToken) {
  return {
    type: LOGIN,
    provider,
    accessToken,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
