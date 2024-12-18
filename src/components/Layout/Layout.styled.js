import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.header`
  background-color: #f8f8f8;
  padding: 10px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center; /* Центрирование списка */
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: 500;

  &.active {
    color: red;
    font-weight: bold;
    border-bottom: 2px solid red; /* Подчеркивание активного элемента */
    padding-bottom: 2px;
  }

  &:hover {
    color: #555;
  }
`;

export const MainContainer = styled.main`
  margin: 40px auto;
  width: 90%;
  max-width: 1200px;
  text-align: center; /* Центрирование контента */
`;
