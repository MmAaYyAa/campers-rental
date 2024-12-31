import { useSelector } from 'react-redux';
import TruckCard from '../TruckCard/TruckCard';
import { selectTrucks } from '../../redux/catalog/catalogSelectors';
export default function TruckList() {
  const trucks = useSelector(selectTrucks);
  return (
    <>
      <ul>
        {trucks.map((truck,index) => (
          <li key={index}>
            <TruckCard truck={truck} />
          </li>
        ))}
      </ul>
    </>
  );
}