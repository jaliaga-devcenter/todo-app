/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN,
  SIGNUP,
  LOGOUT,
} from './constants';

const initialState = fromJS({
  provider: '',
  idToken: '',
  accessToken: '',
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return state
        .set('provider', action.provider)
        .set('idToken', action.idToken)
        .set('accessToken', action.accessToken);
    case LOGIN:
      return state
          .set('provider', action.provider)
          .set('idToken', false)
          .set('accessToken', action.accessToken);
    case LOGOUT:
      return state
        .set('provider', false)
        .set('idToken', false)
        .set('accessToken', false);
    default:
      return state;
  }
}

export default loginPageReducer;
