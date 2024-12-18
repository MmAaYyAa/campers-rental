import { StyledHeader, Logo, NavList, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Logo>TravelTrucks</Logo>
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
    </StyledHeader>
  );
};

export default Header;
