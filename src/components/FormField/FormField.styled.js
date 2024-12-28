
import styled, { css } from 'styled-components';

export const FieldWrapper = styled.div`
  position: relative;
`;

export const InputField = styled.input`
  padding: 8px 12px;
  border: 1px solid var(--gray-light);
  border-radius: 4px;
  width: 100%;
  font-size: 14px;

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: var(--red);
    `}

  ${({ $extraClass }) =>
    $extraClass &&
    css`
      ${$extraClass}
    `}
`;

export  const ErrorText = styled.div`
  color: var(--red);
  font-size: 12px;
  margin-top: 4px;
`;