/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0;
`;

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { access_token: null, id_token: null };
  }

  responseGoogle = (response) => {
    const { access_token, id_token } = response.tokenObj;
    this.setState(Object.assign(this.state, { access_token, id_token }));
  }

  render() {
    return (
      <Wrapper>

        <GoogleLogin
          clientId="--------TODO--------"
          buttonText="Sign up with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        >
        </GoogleLogin>
        <br />
        <GoogleLogin
          clientId="--------TODO--------"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
        <br />
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={this.responseGoogle}
        />

        <p>{this.state.access_token}</p>
        <p>{this.state.id_token}</p>

      </Wrapper>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginpage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
