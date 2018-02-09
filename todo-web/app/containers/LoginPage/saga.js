import { call, takeEvery, put, select, all, fork } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux';

import { signup, login, getUser, getTeams } from 'utils/API';

import { loginSuccess } from 'containers/App/actions';
import { signUpError, loginError } from './actions';
import { SIGNUP, LOGIN, LOGOUT } from './constants';
import { makeSelectProvider, makeSelectIdToken, makeSelectAccessToken } from './selectors';

export function* signUpUser() {
  const provider = yield select(makeSelectProvider());
  const idToken = yield select(makeSelectIdToken());
  try {
    yield call(signup, provider, idToken);
  } catch (err) {
    yield put(signUpError(err));
  }

  yield* loginUser();
}

export function* loginUser() {
  try {
    const provider = yield select(makeSelectProvider());
    const accessToken = yield select(makeSelectAccessToken());
    const jwtToken = yield call(login, provider, accessToken);
    // SAVE JWTTOKEN INTO localStorage
    localStorage.setItem('token', jwtToken.accessToken);

    // GET USER ID FROM JWT idToken
    const privateAccessToken = jwtDecode(jwtToken.accessToken);

    // GET USER AND TEAM INFO FROM BACKEND
    const user = yield getUser(privateAccessToken.userId);

    const teams = yield getTeams();
    const users = yield getUser();
    yield put(loginSuccess(user.id, user.name.fullName, users, teams));
    yield put(push('/'));
  } catch (err) {
    yield put(loginError(err));
  }
}

export function* logoutUser() {
  localStorage.removeItem('token');
}

export function* signUpSagas() {
  yield takeEvery(SIGNUP, signUpUser);
}

export function* loginSagas() {
  yield takeEvery(LOGIN, loginUser);
}

export function* logoutSagas() {
  yield takeEvery(LOGOUT, logoutUser);
}

export default function* root() {
  yield all([
    fork(signUpSagas),
    fork(loginSagas),
    fork(logoutSagas),
  ]);
}
