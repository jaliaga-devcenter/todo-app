import { css } from 'styled-components';

const labelStyles = css`
  display: inline-block;
  float: right;
  padding: 0 1em;
  width: 40%;
  color: #6a7989;
  font-weight: bold;
  font-size: 70.25%;
  text-align: center;
  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  position: absolute;
  padding: 1.25em 0 0;
  width: 4em;
  height: 100%;

  -webkit-transform-origin: 0% 50%;
  transform-origin: 0% 50%;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 4em;
    height: 100%;
    background: #ff9045;
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
  }
`;

export default labelStyles;
