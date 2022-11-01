import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
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