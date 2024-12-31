
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favourites/favouritesSlice';
import { selectFavorites } from '../../redux/favourites/favouritesSelector';
import { formatLocation, formatPrice, truncateText } from '../../utils/utils';
import {TransmissionIcon} from '../Icons/TransmissionIcon';
import {PetrolIcon} from '../Icons/PetrolIcon';
import {ShowerIcon} from '../Icons/ShowerIcon';
import {RadioIcon} from '../Icons/RadioIcon';
import {WindIcon} from '../Icons/WindIcon';
import {KitchenIcon} from '../Icons/KitchenIcon';
import {Img, TitleBox, PriceBox, HeartButton, HeartIconStyled, ReviewBox, Review, TextReview, Location, StarStyled, MapStyled, Text, List, Item,Btn } from '../TruckCard/TruckCard.styled'

export default function TruckCard({
  truck: {
    id,
    name,
    price,
    rating,
    reviews,
    description,
    transmission,
    petrol,
    kitchen,
    AC,
    radio,
    bathroom,
    gallery,
    location,
  },
}) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavourite = favorites.includes(id);
  const handleFavouriteToggle = () => {
    if (isFavourite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

    return (
      <>
        <h3>{name}</h3>
        <Img src={gallery[0].thumb} alt={name} />
        <div>
          <TitleBox>
            <h3>{name}</h3>
            <PriceBox>
              <h3>{formatPrice(price)}</h3>
              <HeartButton onClick={handleFavouriteToggle}>
              <HeartIconStyled className={isFavourite ? 'active' : ''} />
              </HeartButton>
            </PriceBox>
          </TitleBox>
          <ReviewBox>
            <Review>
            <StarStyled />
              <TextReview>{`${rating} (${reviews.length} Reviews)`}</TextReview>
            </Review>
            <Location>
            <MapStyled />
              <p>{formatLocation(location)}</p>
            </Location>
          </ReviewBox>
          <Text>{truncateText(description)}</Text>
          <List>
            {transmission && (
              <Item>
                <TransmissionIcon/>
                <p>Automatic</p>
              </Item>
            )}
            {petrol && (
              <Item>
                <PetrolIcon/>
                <p>Petrol</p>
              </Item>
            )}
            {kitchen && (
              <Item>
                <KitchenIcon/>
                <p>Kitchen</p>
              </Item>
            )}
            {AC && (
              <Item>
                <WindIcon/>
                <p>AC</p>
              </Item>
            )}
            {radio && (
              <Item>
                <RadioIcon/>
                <p>Radio</p>
              </Item>
            )}
            {bathroom && (
              <Item>
                <ShowerIcon/>
                <p>Bathroom</p>
              </Item>
            )}
          </List>
          <Btn to={`${id}`}>Show More</Btn>
        </div>
      </>
    );
    }