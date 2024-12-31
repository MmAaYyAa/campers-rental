import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 64px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px 64px 52px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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