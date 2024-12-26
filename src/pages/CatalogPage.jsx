import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectLoading, selectError } from '../redux/catalog/catalogSelectors';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import { fetchTrucks } from '../redux/catalog/catalogOperations';
import TruckList from '../components/TruckList/TruckList';
import Filter from '../components/Filter/Filter';

export default function CatalogPage() {
  const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
      dispatch(fetchTrucks());
    }, [dispatch]);

    return (
      <main>
        <Filter />
        {isLoading && <Loader />}
        {isError ? <Error /> : <TruckList />}
      </main>
    );
  }