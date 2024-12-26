import styled from "styled-components";

export const Section =  styled.section`
 position: absolute;
  bottom: 80px;
  right: 64px;
  width: 641px;
  padding: 44px 57px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
`;

export const Title = styled.h3`
font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 8px;
  color: var(--color-text);
`;

export const Text = styled.p`
color: var(--color-main);
margin-bottom: 24px;
font-size: 16px;
line-height: 1.5;
`;

export const SubmitButton = styled.button`
  padding: 16px 63px;
  margin: 0 auto;
  background-color: var(--color-button);
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 166px;

  &:hover {
    background-color: var(--color-button-hover);
  }

  &:disabled {
    background-color: var(--color-disabled);
    cursor: not-allowed;
  }
`;


export const StyledForm = styled.form`
 display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const InputField = styled.input`
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
`;

export const TextAreaField = styled.textarea`
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s;
`;

export const ErrorText = styled.span`
  color: var(--color-button);
  font-size: 14px;
`;