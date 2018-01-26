/**
*
* TodoCard
*
*/

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  min-height: 200px;
  max-height: 300px;
  background-color: #FFFFFF;
  border: 1px solid gray;
  box-shadow: 1px 1px 3px #888;
  border-top: 10px solid green;
  margin: 10px 10px;
`;
class TodoCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CardContainer>
        <h4>Name</h4>
        <ul>
          <li>todo 1</li>
          <li>todo 2</li>
          <li>todo 3</li>
        </ul>
      </CardContainer>
    );
  }
}

TodoCard.propTypes = {

};

export default TodoCard;
