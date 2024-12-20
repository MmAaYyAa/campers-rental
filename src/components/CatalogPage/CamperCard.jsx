
import React from 'react';
import { CardImage, MainInfoWrap, TitlePriceWrap, Title, PriceWrap, Price, RatingLocationWrap, RatingWrap, LocationWrap, DetailsList, CardItem, Description, CardButton } from '../CatalogPage/CamperCard.styled';
import {StarIcon} from '../Icons/StarIcon';
import {LocationIcon} from '../Icons/LocationIcon';
import {HeartIcon} from '../Icons/HeartIcon';
import {PetrolIcon} from '../Icons/PetrolIcon';
import {KitchenIcon} from '../Icons/KitchenIcon';
import {TransmissionIcon} from '../Icons/TransmissionIcon';
import {WindIcon} from '../Icons/WindIcon';

const CamperCard = ({ camper }) => {
  return (
    <>
    <CardImage src={camper.gallery[0]} alt={camper.name} />
    
    <MainInfoWrap>
    <TitlePriceWrap>
    <Title>{camper.name}</Title>
    <PriceWrap>
        <Price>€{camper.price.toFixed(2)}</Price>
        <button type="button">
        <HeartIcon width="20" height="20" />
        </button>
        </PriceWrap>
        </TitlePriceWrap>

        <RatingLocationWrap>
        <RatingWrap>
            <StarIcon width="20" height="20" />
            <p>{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
            </RatingWrap>
            <LocationWrap>
          <LocationIcon width="20" height="20" />
            <p>{camper.location.split(",").reverse().join(", ")}</p>
            </LocationWrap>
            </RatingLocationWrap>

        <Description>{camper.description}</Description>
         
        <DetailsList>
          <CardItem>
            <div>
            <TransmissionIcon width={20} height={20} />
            <p>{camper.transmission}</p>
            </div>
          </CardItem>
          <CardItem>
            <div>
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
        <CardButton type="button">Show more ...</CardButton>
        </MainInfoWrap>
        </>
  );
};

export default CamperCard;
