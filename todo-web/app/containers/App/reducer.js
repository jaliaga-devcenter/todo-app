/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  USER_LOGIN_SUCCESS,
} from './constants';
// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  userData: {
    id: false,
    name: false,
  },
  teamData: {
    id: false,
    todos: [],
  },
  teams: [],
  users: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('teams', action.teams)
        .set('users', action.users)
        .setIn(['userData', 'id'], action.user.id)
        .setIn(['userData', 'name'], action.user.name);
    default:
      return state;
  }
}

export default appReducer;
