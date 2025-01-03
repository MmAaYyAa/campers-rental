import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchTrucks } from '../redux/catalog/catalogOperations.js'
import { selectFavorites } from '../redux/favorites/favoritesSelector';
import { selectTrucks } from '../redux/catalog/catalogSelectors';
import TruckCard from '../components/TruckCard/TruckCard';
import { PageContainer, FavoritesList, FavoritesItem, Message, GoToCatalogLink } from '../pages/FavoritesPage/FavoritesPage.styled.js';
const FavoritesPage = () => {
  const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);
    const trucks = useSelector(selectTrucks);
    const isLoading = useSelector(state => state.trucks.loading);
    const rehydrated = useSelector(state => state._persist?.rehydrated);

    console.log("Rehydrated:", rehydrated);
    console.log("Favorites:", favorites);
    console.log("Trucks:", trucks);
    console.log("Loading:", isLoading);
    
useEffect(() => {
  if (trucks.length === 0) {
      dispatch(fetchTrucks());
  }
}, [dispatch, trucks]);

console.log("Favorites IDs: ", favorites); 
console.log("All Trucks: ", trucks);


  const favoriteTrucks = trucks.filter(truck => {
    const isFavorite = favorites.includes(String(truck.id));
    console.log(`Checking truck ID: ${truck.id}, isFavorite: ${isFavorite}`);
    return isFavorite;
});
console.log("Filtered Favorite Trucks: ", favoriteTrucks);
if (!rehydrated || isLoading) {
  return <div>Loading trucks...</div>;
}
    return (
      <PageContainer>
        {favoriteTrucks.length > 0 ? (
          <FavoritesList>
            {favoriteTrucks.map(truck => (
              <FavoritesItem key={truck.id}>
              <TruckCard  truck={truck} />
              </FavoritesItem>
            ))}
          </FavoritesList>
        ) : (
          <Message>No favorites added yet.
             <GoToCatalogLink to="/catalog">
              Go to catalog 
            </GoToCatalogLink>
          </Message>
        )}
      </PageContainer>
    );
  };
  
  export default FavoritesPage;