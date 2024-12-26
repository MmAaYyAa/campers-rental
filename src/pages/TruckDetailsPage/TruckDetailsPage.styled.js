import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.main`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px 64px 80px;
`;

export const ListLinks = styled.ul`
  display: flex;
  gap: 40px;
  width: 100%;
  padding-bottom: 24px;
  margin-bottom: 44px;
  border-bottom: 1px solid var(--color-border);
`;

export const LinkItem = styled.li``;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  padding-bottom: 24px;
  border-bottom: 5px solid transparent;
  transition: border-color var(--transition);

  &.active {
    border-bottom: 5px solid var(--color-button);
  }
`;