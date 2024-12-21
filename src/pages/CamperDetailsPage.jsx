import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalog } from '../redux/catalog/catalogOperations';
import { selectCatalogItems } from '../redux/catalog/catalogSelectors';
import CamperDetails from '../components/CatalogPage/CamperDetails';
import {MainContainer} from '../components/Layout/MainContainer';

const CamperDetailsPage = () => {
    const { id } = useParams(); 
    const dispatch = useDispatch();
    const campers = useSelector(selectCatalogItems);
    const camper = campers.find((camper) => camper.id === id);
    useEffect(() => {
      if (campers.length === 0) {
        dispatch(getCatalog());
      }
    }, [campers, dispatch]);
  
    if (!camper) {
      return <p>Loading...</p>;
    }
  
  //   if (campers.length === 0) {
  //     return <p>Loading...</p>; // Показываем индикатор загрузки
  //   }
  //   console.log('Campers in Redux:', campers);
  //   const camper = campers.find((camper) => camper.id === id); 
  // console.log(camper)
  //   if (!camper) {
  //       return <p>Camper not found</p>;
  //     }
    
      return (
        <MainContainer>
            <CamperDetails camper={camper} />
        </MainContainer>)
    };
    
    export default CamperDetailsPage;