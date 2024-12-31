import styled from 'styled-components';
export const LoadMoreButton = styled.button`
  border: 1px solid var(--gray-light);
  border-radius: 200px;
  padding: 16px 32px;
  margin-top: 40px;
  background-color: transparent;
  transition: border var(--transition);

  &:hover {
    border-color: var(--button-hover);
  }
`;