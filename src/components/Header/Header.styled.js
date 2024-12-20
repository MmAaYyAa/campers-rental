import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color:  var( --color-block);
  position: relative;
  width: 100%;
`;

export const Logo = styled.h1`
position: absolute;
left: 40px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #101828;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center; 
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #101828;
  font-size: 1rem;

  &.active {
    color: red;
    font-weight: bold;
    padding-bottom: 2px;
  }

  &:hover {
    color: #DADDE1;
  }
`;
