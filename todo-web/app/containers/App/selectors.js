import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const selectGlobal = (state) => state.get('global');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('userData')
);

const makeSelectTeam = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('teamData')
);


export {
  makeSelectLocation,
  makeSelectLoading,
  makeSelectError,
  makeSelectUser,
  makeSelectTeam,
};
