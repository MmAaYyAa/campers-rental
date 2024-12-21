import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {addToFavorites, removeFromFavorites} from '../../redux/catalog/catalogSlice';
import {selectFavorites} from '../../redux/catalog/catalogSelectors';
import { CardImage, MainInfoWrap, TitlePriceWrap, Title, PriceWrap, AddToFavBtn, Price, RatingLocationWrap, RatingWrap, LocationWrap, DetailsList, CardItem, Description, CardButton } from './CamperCard.styled';
import {StarIcon} from '../Icons/StarIcon';
import {LocationIcon} from '../Icons/LocationIcon';
import {HeartIcon} from '../Icons/HeartIcon';
import {PetrolIcon} from '../Icons/PetrolIcon';
import {KitchenIcon} from '../Icons/KitchenIcon';
import {TransmissionIcon} from '../Icons/TransmissionIcon';
import {WindIcon} from '../Icons/WindIcon';
import CamperDetails from '../CatalogPage/CamperDetails';

const CamperCard = ({ camper }) => {
  console.log('Camper in CamperCard:', camper);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isCardFavorite = favorites.find((fav) => fav.id === camper.id);

  const handleShowMore = () => {
    console.log('Navigating to:', `/catalog/${camper.id}`);
    navigate(`/catalog/${camper.id}`);
  };

  return (
    <>

          <CardImage src={camper.gallery[0]} alt={camper.name} />

          <MainInfoWrap>
            <TitlePriceWrap>
              <Title>{camper.name}</Title>
              <PriceWrap>
                <Price>€{camper.price.toFixed(2)}</Price>
                <AddToFavBtn
                  type="button"
                  aria-label="Add to favorites"
                  onClick={() =>
                    isCardFavorite
                      ? dispatch(removeFromFavorites(camper.id))
                      : dispatch(addToFavorites(camper))
                  }
                  $isFavorite={isCardFavorite}
                >
                  <HeartIcon width="20" height="20" />
                </AddToFavBtn>
              </PriceWrap>
            </TitlePriceWrap>

            <RatingLocationWrap>
              <RatingWrap>
                <StarIcon width="20" height="20" />
                <p>{`${camper.rating} (${camper.reviews.length} Reviews)`}</p>
              </RatingWrap>
              <LocationWrap>
                <LocationIcon width="20" height="20" />
                <p>{camper.location.split(",").reverse().join(", ")}</p>
              </LocationWrap>
            </RatingLocationWrap>

            <Description>{camper.description}</Description>

            <DetailsList>
              <CardItem>
                <div className="capitalize">
                  <TransmissionIcon width={20} height={20} />
                  <p>{camper.transmission}</p>
                </div>
              </CardItem>
              <CardItem>
                <div className="capitalize">
                  <PetrolIcon width={20} height={20} />
                  <p>{camper.engine}</p>
                </div>
              </CardItem>
              <CardItem>
                <div>
                  <KitchenIcon width={20} height={20} />
                  <p>Kitchen</p>
                </div>
              </CardItem>
              <CardItem>
                <div>
                  <WindIcon width={20} height={20} />
                  <p>AC</p>
                </div>
              </CardItem>
            </DetailsList>
            <CardButton type="button" onClick={handleShowMore}>
              Show more ...
            </CardButton>
          </MainInfoWrap>
    </>
  );
};

export default CamperCard;
