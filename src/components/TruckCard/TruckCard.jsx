import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favourites/favouritesSlice';
import { selectFavorites } from '../../redux/favourites/favouritesSelector';
import { formatLocation, formatPrice, truncateText } from '../../utils/utils';
import {HeartIcon} from '../Icons/HeartIcon';
import {StarIcon} from '../Icons/StarIcon';
import {LocationIcon } from '../Icons/LocationIcon';
import {TransmissionIcon} from '../Icons/TransmissionIcon';
import {PetrolIcon} from '../Icons/PetrolIcon';
import ShowerIcon from '../Icons/ShowerIcon';
import RadioIcon from '../Icons/RadioIcon';
import {WindIcon} from '../Icons/WindIcon';
import {KitchenIcon} from '../Icons/KitchenIcon';

export default function TruckCard({
  truck: {
    id,
    name,
    price,
    rating,
    reviews,
    description,
    automatic,
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
        <img src={gallery[0].thumb} alt={name}></img>
        <div>
          <div>
            <h3>{name}</h3>
            <div>
              <h3>{formatPrice(price)}</h3>
              <button onClick={handleFavouriteToggle}>
                <HeartIcon/>
              </button>
            </div>
          </div>
          <div>
            <div>
              <StarIcon/>
              <p>{`${rating} (${reviews.length} Reviews)`}</p>
            </div>
            <div>
              <LocationIcon />
              <p>{formatLocation(location)}</p>
            </div>
          </div>
          <p>{truncateText(description)}</p>
          <ul>
            {automatic && (
              <li>
                <TransmissionIcon/>
                <p>Automatic</p>
              </li>
            )}
            {petrol && (
              <li>
                <PetrolIcon/>
                <p>Petrol</p>
              </li>
            )}
            {kitchen && (
              <li>
                <KitchenIcon/>
                <p>Kitchen</p>
              </li>
            )}
            {AC && (
              <li>
                <WindIcon/>
                <p>AC</p>
              </li>
            )}
            {radio && (
              <li>
                <RadioIcon/>
                <p>Radio</p>
              </li>
            )}
            {bathroom && (
              <li>
                <ShowerIcon/>
                <p>Bathroom</p>
              </li>
            )}
          </ul>
          <Link to={`${id}`}>Show More</Link>
        </div>
      </>
    );
    }