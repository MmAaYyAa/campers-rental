import { useSelector } from 'react-redux';

import TruckCard from '../TruckCard/TruckCard';
import { selectFilteredTrucks } from '../../redux/catalog/catalogSelectors';
export default function TruckList() {
  const filteredTrucks = useSelector(selectFilteredTrucks);
  return (
    <>
      <ul>
        {filteredTrucks.map(truck => (
          <li key={truck.id}>
            <TruckCard truck={truck} />
          </li>
        ))}
      </ul>
    </>
  );
}