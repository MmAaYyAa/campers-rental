
import { StyledHeader, Logo, NavList, StyledNavLink } from './Header.styled';
import LogoIcon from '../Icons/LogoIcon';

const Header = () => {
  return (
    
    <StyledHeader>
       
      <Logo>
      <LogoIcon width="136" height="15" />
      </Logo>
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
    </StyledHeader>
    
  );
};

export default Header;
