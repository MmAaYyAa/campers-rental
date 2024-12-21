import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../Layout/MainContainer';
import { Title, RatingWrap, RatingLocationWrap, Price, LocationWrap, Description } from './CamperCard.styled'
import {StarIcon} from '../Icons/StarIcon';
import {LocationIcon} from '../Icons/LocationIcon';


const CamperDetails = ({camper, onClose}) => {
  console.log("Camper in CamperDetails:", camper);
console.log("Gallery:", camper?.gallery);
console.log("Location:", camper?.location);
const navigate = useNavigate();
  if(!camper){

    return <p>No camper data available</p>
  }

  const handleGoBack = () => {
    navigate(-1);
  };

    return (
      
        <MainContainer>
          <div>
          <Title>{camper.name}</Title>
          <RatingLocationWrap id="rating-wrap">
                <RatingWrap>
                  <StarIcon width={20} height={20} />
                  <p>{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
                </RatingWrap>
                <LocationWrap>
                  <LocationIcon width={20} height={20} />
                  <p>{camper.location.split(",").reverse().join(", ")}</p>
                </LocationWrap>
              </RatingLocationWrap>
              <Price>€{camper.price.toFixed(2)}</Price>
          </div>
          <ul>
          {camper.gallery.map((img, index) => (
            <img key={index} src={img} alt={`${camper.name} - ${index + 1}`} />
          ))}
            </ul>
            <Description id="description">{camper.description}</Description>
            <button onClick={handleGoBack}>Go Back</button>
        </MainContainer>
    )
  };

  export default CamperDetails;