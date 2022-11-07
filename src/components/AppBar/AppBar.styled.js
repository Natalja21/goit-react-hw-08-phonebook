import styled from 'styled-components';

export const Header = styled.header`
  list-style: none;
  margin: 0;
  border-bottom: 1px solid rgb(244, 205, 151);
`;

export const Box = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
  }
`;
