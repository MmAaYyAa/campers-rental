import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalogItems, selectIsLoading, selectError } from '../redux/catalog/catalogSelectors';
import { getCatalog } from '../redux/catalog/catalogOperations';
import Loader from '../components/Loader/Loader';
import Filter from '../components/Filter/Filter';
import CamperCard from '../components/CatalogPage/CamperCard';
import { CatalogContainer, FilterWrapper, CamperList, Message } from '../components/CatalogPage/CatalogPage.styled';

const CatalogPage = () => {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
      location: '',
      equipment: [],
      type: [],
  });
    const items = useSelector(selectCatalogItems);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getCatalog(filters));
    }, [filters, dispatch]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return isLoading ? (
      <Loader />
    ):(
        <CatalogContainer>
            <FilterWrapper>
                <Filter selectedFilters={filters} onChange={handleFilterChange} />
            </FilterWrapper>
            {error && <Message>Error: {error}</Message>}
            <CamperList>
                {items.map((camper) => (
                    <CamperCard key={camper.id} camper={camper} />
                ))}
            </CamperList>
        </CatalogContainer>
    );
};

export default CatalogPage;





// import React, {useEffect, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCatalogItems, selectIsLoading, selectError } from '../redux/catalog/catalogSelectors';
// import {getCatalog} from '../redux/catalog/catalogOperations';
// import IconFilter from '../components/Filter/IconFilter';
// import CamperCard from '../components/CatalogPage/CamperCard';
// import { CatalogContainer, CamperList, Message } from '../components/CatalogPage/CatalogPage.styled';

// const CatalogPage = () => {
//  const dispatch = useDispatch();
//  const [filters, setFilters] = useState([]);
//   const items = useSelector(selectCatalogItems);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(getCatalog(filters));
//   }, [filters, dispatch]);

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   console.log(items)
//   return (
//     <CatalogContainer>
//       <IconFilter selectedFilters={filters} onFilterChange={handleFilterChange} />
//       {isLoading && <Message>Loading...</Message>}
//       {error && <Message>Error: {error}</Message>}
//       <CamperList>
//         {items.map((camper) => (
//           <CamperCard key={camper.id} camper={camper} />
//         ))}
//       </CamperList>
//     </CatalogContainer>
//   );
// };

// export default CatalogPage;
