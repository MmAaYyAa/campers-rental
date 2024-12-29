import styled from 'styled-components';
import {LocationIcon} from '../Icons/LocationIcon';

export const Title = styled.h2`
  font-size: 16px;
  line-height: 150%;
  color: var(--gray);
`;

export const InputWrapper = styled.div`
 position: relative;
 margin: 8px 0 40px;
`;

export const StyledInputLocationIcon = styled(LocationIcon)`
position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const Input = styled.input`
 width: 100%;
  border: none;
  border-radius: 12px;
  padding: 16px 20px 16px 48px;

  background-color: var(--color-inputs);
`;

export const FilterTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin: 32px 0 24px;
`;


export const FilterList = styled.ul`
 display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 360px;
  padding-top: 24px;
  margin-bottom: 40px;
  border-top: 1px solid var(--color-border);
`;

export const BtnFilter = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;

width: 112px;
height: 96px;
border-radius: 12px;

text-transform: capitalize;
text-align: center;
`;