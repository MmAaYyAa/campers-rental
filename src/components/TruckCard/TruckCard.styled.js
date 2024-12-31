import styled from 'styled-components';
import {LocationIcon} from '../Icons/LocationIcon';
import {StarIcon} from '../Icons/StarIcon';
import {HeartIcon} from '../Icons/HeartIcon';
import { Link } from 'react-router-dom';



export const Img = styled.img`
  border-radius: 10px;
  width: 292px;
  object-fit: cover;
  height: 320px;
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
  background: none;
  border: none;
`;

export const HeartIconStyled = styled(HeartIcon)`
  fill: inherit;
  transition: fill 0.3s ease;

  &.active {
    fill: var(--color-button);
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
  padding: 16px 40px;
  text-decoration: none;
`;