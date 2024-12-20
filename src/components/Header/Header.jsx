import {MainContainer} from '../Layout/MainContainer';
import { StyledHeader, Logo, NavList, StyledNavLink } from './Header.styled';
import LogoIcon from '../Icons/LogoIcon';

const Header = () => {
  return (
    
    <StyledHeader>
      <MainContainer>
      <Logo>
      <LogoIcon width="136" height="15" />
      </Logo>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </li>
        </NavList>
      </nav>
      </MainContainer>
    </StyledHeader>
    
  );
};

export default Header;
