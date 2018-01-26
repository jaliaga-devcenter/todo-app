/**
*
* HideoInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import FontAwesome from 'react-fontawesome';

import spanStyles from './spanStyles';
import inputStyles from './inputStyles';
import labelStyles from './labelStyles';
import labelContentStyles from './labelContentStyles';

import iconStyles from './iconStyles';

const Container = styled.span`${spanStyles}`;
const Input = styled.input`${inputStyles}`;
const Label = styled.label`${labelStyles}`;
const LabelContent = styled.span`${labelContentStyles}`;
const StyledIcon = styled(FontAwesome)`${iconStyles}`;


function HideoInput(props) {
  return (
    <Container>
      <Input type="text" id={props.id} />
      <Label htmlFor={props.id}>
        <StyledIcon name={props.icon} fixedWidth />
        <LabelContent>Username</LabelContent>
      </Label>
    </Container>
  );
}

HideoInput.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default HideoInput;
