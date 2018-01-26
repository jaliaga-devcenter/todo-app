import { css } from 'styled-components';

const inputStyles = css`
  position: relative;
  display: block;
  float: right;
  padding: 0.8em;
  width: 60%;
  border: none;
  border-radius: 0;
  background: #f0f0f0;
  color: #aaa;
  font-weight: bold;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-appearance: none; /* for box shadows to show on iOS */

  padding: 0.85em 0.85em 0.85em 3em;
  width: 100%;
  background: transparent;
  -webkit-transform: translate3d(1em, 0, 0);
  transform: translate3d(1em, 0, 0);
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;

  &:focus{
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    outline: none;
  }

  &:focus + label {
    -webkit-transform: scale3d(0.8, 1, 1);
    transform: scale3d(0.8, 1, 1);
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
  }

  &:focus .fa {
    -webkit-transform: scale3d(0.6, 0.6, 1);
    transform: scale3d(0.6, 0.6, 1);
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
}

`;

export default inputStyles;
