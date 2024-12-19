import styled from 'styled-components';

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FilterWrapper = styled.div`
  flex: 1;
  max-width: 300px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CamperList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  flex: 3;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Message = styled.p`
  text-align: center;
  color: #888;
  font-size: 1.2rem;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin: 20px 0;
`;






// import styled from 'styled-components';

// export const CatalogContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// export const CamperList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 20px;
// `;

// export const Message = styled.p`
//   text-align: center;
//   color: #555;
// `;