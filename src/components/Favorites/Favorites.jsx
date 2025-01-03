import {useSelector} from 'react-redux';
import TruckCard from '../TruckCard/TruckCard';

const Favorites = ({ favorites }) => {
  const trucks = useSelector((state) => state.trucks.items);

  // Find trucks matching the favorites
  const favoriteTrucks = trucks.filter((truck) => favorites.includes(truck.id));

  return (
    <div>
      {favoriteTrucks.map((truck) => (
        <TruckCard key={truck.id} truck={truck} />
      ))}
    </div>
  );
};

    

export default Favorites;