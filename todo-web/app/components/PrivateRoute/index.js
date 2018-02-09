/**
*
* PrivateRoute
*
*/
import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import PropTypes from 'prop-types';

import { isLoggedIn } from 'utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
    isLoggedIn() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
      )
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
};

export default PrivateRoute;
