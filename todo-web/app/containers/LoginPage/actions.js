/*
 *
 * LoginPage actions
 *
 */

import {
  SIGNUP,
  SIGNUP_ERROR,
  LOGIN,
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

export function login(provider, idToken, accessToken) {
  return {
    type: LOGIN,
    provider,
    idToken,
    accessToken,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
