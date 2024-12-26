import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color:  var( --color-block);
  position: relative;
  width: 100%;
  height: 72px;
`;

export const Logo = styled.div`
position: absolute;
top: 28px;
left: 64px;
  
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
