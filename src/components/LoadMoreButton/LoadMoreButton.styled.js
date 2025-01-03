import styled from 'styled-components';
export const LoadMoreBtn = styled.button`
  border: 1px solid var(--color-border);
  border-radius: 200px;
  padding: 16px 32px;
  margin-top: 40px;
  background-color: transparent;
  transition: border var(--transition);
  color: var(--color-text);

  &:hover {
    border-color: var(--color-button-hover);
  }
`;