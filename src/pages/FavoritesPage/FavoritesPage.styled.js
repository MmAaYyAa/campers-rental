import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  max-width: 1272px;
`;

export const Message = styled.p`
  font-size: 20px;
font-weight: 600;
line-height: 1.25;
text-align: center;
color: var(--gray);
margin-top: 50px;
`;

export const FavoritesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;

export const FavoritesItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  background-color: var(--color-background);
  `;

export const AddToFavBtn = styled.button`
svg {
  fill: ${({ $isFavorite }) =>
    $isFavorite ? "var(--accent-red)" : "transparent"};
  stroke: ${({ $isFavorite }) =>
    $isFavorite ? "none" : "var(--text-color)"};
  transition: fill var(--cubic-transition);
}

@media screen and (min-width: 1440px) {
  &:hover svg {
    fill: ${({ $isFavorite }) =>
      $isFavorite ? "transparent" : "var(--accent-red)"};
    stroke: ${({ $isFavorite }) =>
      $isFavorite ? "var(--text-color)" : "var(--accent-red)"};
  }
}
`;

export const GoToCatalogLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: var(--color-button);
`;