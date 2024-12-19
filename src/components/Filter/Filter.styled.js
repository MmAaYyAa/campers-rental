import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background-color: #f8f9fa;
`;

export const IconList = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

export const IconItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 2px solid ${({ selected }) => (selected ? '#007bff' : '#ccc')};
  border-radius: 50%;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#007bff' : '#555')};
  transition: all 0.3s;

  &:hover {
    border-color: #007bff;
    color: #007bff;
  }
`;

export const IconLabel = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;
