import styled from 'styled-components';
import {LocationIcon} from '../Icons/LocationIcon';
import {StarIcon} from '../Icons/StarIcon';
import { Link } from 'react-router-dom';


export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background-color: var(--color-background);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Img = styled.img`
  border-radius: 10px;
  width: 292px;
  object-fit: cover;
  height: 320px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const HeartButton = styled.button`
background: transparent;
  border: none;
  cursor: pointer;
svg{
  fill: ${({ $isFavorite }) => $isFavorite ?"var(--color-button)" : "transparent"};
  stroke: ${({ $isFavorite }) => ($isFavorite ? "none" :"var(--gray)" )};
  transition: fill 0.3s ease, stroke 0.3s ease;
}
`;

export const ReviewBox = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Review = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TextReview = styled.p`
  text-decoration: underline;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StarStyled = styled(StarIcon)`
  fill: var(--color-rating);
`;

export const MapStyled = styled(LocationIcon)`
  fill: var(--color-text);
`;

export const Text = styled.p`
  width: 525px;
  margin-bottom: 24px;
  color: var(--color-main);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 392px;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-basis: calc(100% / 3 - 16px);
  padding: 12px 18px;
  border-radius: 100px;
  background-color: var(--color-block);
`;

export const Btn = styled(Link)`
 width: 130px;
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--color-button);
  color: var(--color-background);
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--color-button-hover); 
  }

  &:active {
    background-color: var(--color-button-hover);
    
  }
`;
