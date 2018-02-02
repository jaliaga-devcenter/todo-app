import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLogin = (state) => state.get('login');

/**
 * Default selector used by LoginPage
 */

const makeSelectProvider = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('provider')
);

const makeSelectIdToken = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('idToken')
);

const makeSelectAccessToken = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('accessToken'),
);

export {
  selectLogin,
  makeSelectProvider,
  makeSelectIdToken,
  makeSelectAccessToken,
};
