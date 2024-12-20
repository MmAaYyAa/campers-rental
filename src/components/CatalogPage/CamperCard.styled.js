
import styled, { css } from "styled-components";

const TitleStyle = css`
  color: var(--color-text);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
`;

const AlignItems = css`
  display: flex;
  align-items: center;
`;

export const CamperList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 50px;
  padding: 0 16;
`;

export const CardItem = styled.li`
  ${AlignItems}
  flex-direction: row;
  gap: 20px;
  width: 100%;
  max-width: 80%;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  padding: 32px;
  background: var(--color-background);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin: 0 auto;
  
  
`;

export const CardImage = styled.img`
  width: 30%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;

`;

export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
  /* width: 100%; */
`;

export const TitlePriceWrap = styled.div`
  ${AlignItems}
  justify-content: space-between;
  gap: 24px;
`;

export const Title = styled.p`
  ${TitleStyle}
`;

export const PriceWrap = styled.div`
  ${AlignItems}
  gap: 8px;

  button {
    svg {
      fill: transparent;
      stroke: var(--color-text);
      transition: fill var(--cubic-transition);

      &:hover,
      &:focus {
        fill: var(--color-button-hover);
        stroke: var(--color-button-hover);
      }
    }
  }
`;

export const Price = styled.p`
  ${TitleStyle}
`;

export const RatingLocationWrap = styled.div`
  ${AlignItems}
  gap: 16px;
`;

export const RatingWrap = styled.div`
  ${AlignItems}
  gap: 5px;

  p {
    text-decoration: underline;
  }
`;

export const LocationWrap = styled.div`
  ${AlignItems}
  flex-wrap: wrap;
  gap: 8px;

  svg {
    fill: none;
    stroke: var(--color-text);
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: var(--color-main);
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailsList = styled.ul`
   ${AlignItems}
  /* flex-wrap: wrap; */
  gap: 12px;
  justify-content: start;

  li {
    font-size: 16px;
    font-weight: 500;
    border-radius: 100px;
    padding: 10px 20px;
    color: var(--text-color);
    background-color: var(--color-block);
    white-space: nowrap;
  
    div {
      ${AlignItems}
      gap: 5px;

      &.capitalize {
        text-transform: capitalize;
      }
    }
  
  }
`;

export const CardButton = styled.button`
   width: 150px;
  border-radius: 200px;
  padding: 16px 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--color-button);
  color: var(--color-background);
  transition: background-color var(--linear-transition);


  &:hover,
  &:focus {
    background-color: var(--color-button-hover);
  }
`;
