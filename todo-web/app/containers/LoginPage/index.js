/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { makeSelectProvider, makeSelectIdToken, makeSelectAccessToken } from './selectors';
import { signUp, login, logout } from './actions';
import reducer from './reducer';
import saga from './saga';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0;
`;

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  googleSignup = (response) => {
    const { access_token, id_token } = response.tokenObj;
    this.props.onSignUp('google', id_token, access_token);
  }

  googleLogin = (response) => {
    const { access_token, id_token } = response.tokenObj;
    this.props.onSignUp('google', id_token, access_token);
  }

  googleLogout = () => {
    this.props.onLogout();
  }

  responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    return (
      <Wrapper>
        <GoogleLogin
          clientId="33584198011-5snjiujs92pb0ru5k1hljlqjlaur10ik.apps.googleusercontent.com"
          buttonText="Sign up with Google"
          onSuccess={this.googleSignup}
          onFailure={this.responseGoogle}
        >
        </GoogleLogin>
        <br />
        <GoogleLogin
          clientId="33584198011-5snjiujs92pb0ru5k1hljlqjlaur10ik.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.googleLogin}
          onFailure={this.responseGoogle}
        />
        <br />
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={this.googleLogout}
        />
      </Wrapper>
    );
  }
}

LoginPage.propTypes = {
  onSignUp: PropTypes.func,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // provider: makeSelectProvider(),
  // idToken: makeSelectIdToken(),
  // accessToken: makeSelectAccessToken(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSignUp: (provider, idToken, accessToken) => dispatch(signUp(provider, idToken, accessToken)),
    onLogin: (provider, accessToken) => dispatch(login(provider, accessToken)),
    onLogout: () => dispatch(logout()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });


export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
