import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/catalog/catalogSelectors";
import {MainContainer} from '../components/Layout/MainContainer';
import CamperCard from '../components/CatalogPage/CamperCard';
import { CamperList,CardItem } from "../components/CatalogPage/CamperCard.styled";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
    <MainContainer>
      {favorites.length > 0 ? (
        <CamperList>
           {favorites.map((fav) => (
              <CardItem key={fav.id}>
                <CamperCard camper={fav} />
              </CardItem>
            ))}
        </CamperList>
      ) : (<div>It seems you have not added anything to favorites ...</div>

      )}
    </MainContainer>
    </>
  );
};

export default Favorites