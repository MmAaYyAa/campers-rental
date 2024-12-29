import styled from "styled-components";

export const Section = styled.section`
border-radius: 10px;
  padding: 44px 52px;
  width: 631px;
  height: 579px;
  background-color: var(--color-inputs);
`;

export const List = styled.ul`
 display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 100px;
  
`;

export const ListItem = styled.li`
display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  background-color: var(--color-border);
  
`;

export const Title = styled.h3`
font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 24px;
  
`;

export const DetailsList = styled.ul`
 padding-top: 24px;
 border-top: 1px solid var(--color-border);
  
`;

export const DetailsItem = styled.li`
display: flex;
justify-content: space-between;
  
`;

export const Details = styled.p`
font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  
`;



