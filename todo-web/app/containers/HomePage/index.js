/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';

import styled from 'styled-components';

import TodoCard from 'components/TodoCard/Loadable';

import { makeSelectUser, makeSelectTeam, makeSelectLoading, makeSelectError } from '../App/selectors';
import saga from './saga';


const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: flex-start;
  background-color: #DDDDDD;
  flex-wrap: wrap;

`;

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Wrapper>
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </Wrapper>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeTeam: (evt) => dispatch(),
  };
}

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUser(),
  teamData: makeSelectTeam(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect,
)(HomePage);
