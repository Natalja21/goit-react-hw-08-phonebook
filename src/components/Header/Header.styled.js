import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 40px 0;
  background-color: bisque;
  & > nav {
    margin: 75px 0;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  padding: 10px;
  color: #000;
  text-decoration: none;
  font-weight: 900;
  font-size: 22px;
  line-height: 1.87;
  align-items: center;
  letter-spacing: 0.06em;
  &.active {
    color: orange;
  }
  :hover:not(.active) {
    text-decoration: underline;
  }
`;