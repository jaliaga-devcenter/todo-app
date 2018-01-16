import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "article"
    "footer";
  grid-template-rows: 50px 1fr 40px;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  height: 100vh;
  margin: 0;
`;

export default Wrapper;