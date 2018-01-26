import { css } from 'styled-components';

const spanStyles = css`
  font-size: 150%;

  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 1em;
  max-width: 400px;
  width: calc(100% - 2em);
  vertical-align: top;

  overflow: hidden;
  background: #fff;
`;

export default spanStyles;
