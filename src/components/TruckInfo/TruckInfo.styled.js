import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 60px;
  
`;

export const Title = styled.h3`
font-weight: 600;
  font-size: 24px;
  line-height: 133%;
  margin-bottom: 8px;
  
`;

export const ReviewBox =styled.div`
display: flex;
  gap: 16px;
  margin-bottom: 16px;
  
`; 

export const Review = styled.div`
display: flex;
  align-items: center;
  gap: 4px;
  
`;

export const Star = styled.svg`
fill: var(--color-rating);
  
`;

export const ReviewText = styled.p`
text-decoration: underline;
  
`;

export const Location = styled.div`
display: flex;
  align-items: center;
  gap: 4px;
  
`;

export const List = styled.ul`
display: flex;
  flex-wrap: wrap;
  gap: 48px;
  margin: 28px 0;
  
`;

export const Item = styled.li`

  
`;

export const Image = styled.img`
 border-radius: 10px;
  width: 292px;
  object-fit: cover;
  height: 312px;
  
`;


export const Description = styled.p`
color: var(--color-main);
  
`;