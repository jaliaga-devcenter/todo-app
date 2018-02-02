import { call, takeLatest, put, select } from 'redux-saga/effects';
import { signup } from 'utils/API';

import { signUpError } from './actions';
import { SIGNUP } from './constants';
import { makeSelectProvider, makeSelectIdToken, makeSelectAccessToken } from './selectors';

export function* signUpUser() {
  const provider = yield select(makeSelectProvider());
  const idToken = yield select(makeSelectIdToken());
  try {
    yield call(signup, provider, idToken);
  } catch (err) {
    yield put(signUpError(err));
  }

  const accessToken = yield select(makeSelectAccessToken());
}
// Individual exports for testing
export default function* loginSagas() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGNUP, signUpUser);
}
