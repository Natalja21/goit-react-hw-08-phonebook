import styled from 'styled-components';

export const List = styled.ul`
  max-width: 400px;
  height: auto;
  margin: auto;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 320px;
  }
  @media screen and (min-width: 1200px) {
    width: 500px;
  }
`;
