import styled from 'styled-components';
import {LocationIcon} from '../Icons/LocationIcon';


export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  font-size: 16px;
  line-height: 150%;
  color: var(--gray);
`;

export const InputWrapper = styled.div`
 position: relative;
 margin: 8px 0 40px;
`;

export const StyledInputLocationIcon = styled.div`
position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  &.inputEmpty {
    fill: var(--gray);
  }

  &.inputFilled {
    fill: var(--color-text);
  }
`;

export const Input = styled.input`
 width: 100%;
  border: none;
  border-radius: 12px;
  padding: 16px 20px 16px 48px;
  background-color: var(--color-inputs);
  
  &::placeholder {
    color: var(--gray);
  }
`;

export const FilterTitle = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin: 32px 0 24px;
`;


export const FilterList = styled.div`
 display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 360px;
  padding-top: 24px;
  margin-bottom: 40px;
  border-top: 1px solid var(--color-border);
`;

export const BtnFilter = styled.button.attrs((props) => ({
  'data-active': props.$active,
}))`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.$active ? '#007BFF' : 'white')};
  color: ${(props) => (props.$active ? 'white' : 'black')};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.$active ? '#0056b3' : '#f0f0f0')};
  }
`;


export const Button = styled.button`
 padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#007BFF')};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#0056b3')};
  }
`;