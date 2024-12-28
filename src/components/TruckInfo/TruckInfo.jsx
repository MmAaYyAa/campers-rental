import { formatLocation, formatPrice } from '../../utils/utils';
import {Section, Title, ReviewBox, Review, Star, ReviewText, Location, List, Image, Description} from '../TruckInfo/TruckInfo.styled';
import {StarIcon} from '../Icons/StarIcon';
import { LocationIcon } from '../Icons/LocationIcon';
export default function TruckInfo({
  truck: { name, price, rating, reviews, description, gallery, location },
}) {
    return (
        <>
          <Section>
            <Title>{name}</Title>
            <ReviewBox>
              <Review>
                <Star width={16} height={16}>
                <StarIcon />
                </Star>
                <ReviewText>{`${rating}(${reviews.length} Reviews)`}</ReviewText>
              </Review>
              <Location>
                <LocationIcon />
                <p>{formatLocation(location)}</p>
              </Location>
            </ReviewBox>
            <Title>{formatPrice(price)}</Title>
            <List>
              {gallery.map((image, index) => (
                <li key={index}>
                  <Image
                    src={image.thumb}
                    alt="photo of truck"
                  ></Image>
                </li>
              ))}
            </List>
            <p>{description}</p>
          </Section>
        </>
      );
    }