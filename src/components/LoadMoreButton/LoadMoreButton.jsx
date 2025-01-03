import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectFilters } from '../../redux/filters/filterSelector';
import { selectTotal, selectTrucks } from '../../redux/catalog/catalogSelectors';
import { fetchTrucks } from '../../redux/catalog/catalogOperations';
import { clearTrucks } from '../../redux/catalog/catalogSlice';
import { scrollDown } from '../../utils/scroll';
import {LoadMoreBtn} from '../LoadMoreButton/LoadMoreButton.styled';



export default function LoadMoreButton() {
  const [currentPage, setCurrentPage] = useState(1);
  const trucks = useSelector(selectTrucks);
  const filters = useSelector(selectFilters);
  const total = useSelector(selectTotal);

  const limit = 4;
  const totalPages = useMemo(() => Math.ceil(total / limit), [total, limit]);

  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentPage(1);
    dispatch(fetchTrucks({ page: 1, filters, reset: true }));
  }, [filters, dispatch]);

  const handleLoadMore = () => {
    dispatch(
      fetchTrucks({
        page: currentPage + 1,
        filters,
        reset: false,
      })
    )
      .unwrap()
      .then(scrollDown)
      .catch(() => {
        dispatch(clearTrucks());
      });

    setCurrentPage(prev => prev + 1);
  };
    return (
    <>
     {currentPage < totalPages && trucks.length > 0 && (
    <LoadMoreBtn type="button" onClick={handleLoadMore}>
      Load More
    </LoadMoreBtn>
     )}
    </>
    );
  }