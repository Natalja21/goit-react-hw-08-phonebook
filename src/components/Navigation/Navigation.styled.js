import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  padding: 10px;
  color: rgb(244, 205, 151);
  text-decoration: none;
  font-weight: 900;
  font-size: 18px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  text-align: center;
  &.active {
    text-decoration: underline;
    color: rgb(160, 111, 43);
  }
  :hover:not(.active) {
    color: rgb(160, 111, 43);
  }
`;
