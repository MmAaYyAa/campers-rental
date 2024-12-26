import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import {
  setLocation,
  toggleTruckEquipment,
  setTruckType,
} from '../../redux/filters/filterSlice';
import { fetchTrucks } from '../../redux/catalog/catalogOperations';
import { selectFilters } from '../../redux/filters/filterSelector';
import {LocationIcon} from '../Icons/LocationIcon';
import {formatString} from '../../utils/utils';
export default function Filter() {
  const dispatch = useDispatch();
  const {truckType, truckEquipment } = useSelector(selectFilters);

  const [activeFilters, setActiveFilters] = useState({
    location: '',
    truckType: { ...truckType },
    truckEquipment: { ...truckEquipment },
  });

  const locationRef = useRef('');
  const truckTypeRef = useRef({ ...truckType });
  const truckEquipmentRef = useRef({ ...truckEquipment });
  
  const handleLocationChange = e => {
    const input = e.target.value;
    locationRef.current = input.split(', ').reverse().join(', ');
    setActiveFilters(prev => ({ ...prev, location: e.target.value }));
  };

  const handleTruckTypeChange = type => {
    dispatch(setTruckType(type));const newTruckType = { ...truckTypeRef.current };
    if (newTruckType[type]) {
      newTruckType[type] = false;
    } else {
      Object.keys(newTruckType).forEach(key => {
        newTruckType[key] = false;
      });
      newTruckType[type] = true;
  }

  truckTypeRef.current = newTruckType;
    setActiveFilters(prev => ({
      ...prev,
      truckType: { ...newTruckType },
    }));
};
  const handleEquipmentToggle = equipment => {
    truckEquipmentRef.current[equipment] =
    !truckEquipmentRef.current[equipment];
  setActiveFilters(prev => ({
    ...prev,
    truckEquipment: {
      ...prev.truckEquipment,
      [equipment]: truckEquipmentRef.current[equipment],
    },
  }));
  };
  const handleSearch = () => {
    dispatch(setLocation(locationRef.current));
    Object.keys(truckTypeRef.current).forEach(type => {
      if (truckTypeRef.current[type]) {
        dispatch(setTruckType(type));
      }
    });
    Object.keys(truckEquipmentRef.current).forEach(equipment => {
      if (truckEquipmentRef.current[equipment]) {
        dispatch(toggleTruckEquipment(equipment));
      }
    });
    dispatch(fetchTrucks());
  };
  return (
   <section>
    <h2>Location</h2>
    <div>
        <LocationIcon />
        <input type="text"
        placeholder="Kyiv, Ukraine"
        onChange={handleLocationChange}
         />
    </div>
    <h2>Filters</h2>
    <h3>Vehicle Equipment</h3>
    <ul>
    {Object.keys(truckEquipment).map(equipment => (
         <li key={equipment}>
            <button onClick={() => handleEquipmentToggle(equipment)} style={{
                border: truckEquipment[equipment]
                  ? '2px solid blue'
                  : '1px solid gray',
              }}>
             {equipment}
            </button>
         </li>
   ) )}
    </ul>

    <h3>Vehicle Type</h3>
    <ul>
    {Object.keys(truckType).map(type => (
         <li key={type}>
         <button
           onClick={() => handleTruckTypeChange(type)}
         >
           {' '}
          
           {formatString(type)}
         </button>
       </li>
     ))}
    
    </ul>
    <button onClick={handleSearch}>
        Search
      </button>
   </section>
  );
}