import { css } from 'styled-components';

const iconStyles = css`
  color: #ddd;
  font-size: 150%;

  color: #ddd;
  -webkit-transform: scale3d(1, 1, 1); /* Needed for Chrome bug */
  transform: scale3d(1, 1, 1);
  -webkit-transform-origin: 0% 50%;
  transform-origin: 0% 50%;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s
`;

export default iconStyles;
