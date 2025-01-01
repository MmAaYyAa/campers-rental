import { useSelector, useDispatch } from 'react-redux';
import {useEffect } from 'react';
import { selectLoading, selectError, selectTrucks} from '../../redux/catalog/catalogSelectors';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { fetchTrucks } from '../../redux/catalog/catalogOperations';
import TruckList from '../../components/TruckList/TruckList';
import LoadMoreBtn from '../../components/LoadMoreButton/LoadMoreButton';
//import ScrollToTopButton from '../../components/ScrollToTopBtn/ScrollToTopBtn';
import { selectFilters } from '../../redux/filters/filterSelector';
import Filter from '../../components/Filter/Filter';
import { Container, Wrapper} from '../CatalogPage/CatalogPage.styled';

export default function CatalogPage() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const trucks = useSelector(selectTrucks);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks({ page: 1, filters, reset: true }));
  }, [dispatch, filters]);

    

    return (
      <Container>
        <Filter />
        {isLoading && <Loader />}
        {isError && <Error />}
        <Wrapper>
        {trucks.length > 0 && <TruckList />}
        {trucks.length > 0 && <LoadMoreBtn />}
      </Wrapper>
      {/* <ScrollToTopButton /> */}
      </Container>
    );
  }