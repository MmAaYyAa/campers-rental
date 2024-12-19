
import React from 'react';
import { Card, CardImage, CardInfo, CardButton } from '../CatalogPage/CamperCard.styled';
import StarIcon from '../Icons/StarIcon';
import LocationIcon from '../Icons/LocationIcon';
import HeartIcon from '../Icons/HeartIcon';

const CamperCard = ({ camper }) => {
  return (
    <Card>
      <CardImage src={camper.gallery[0]} alt={camper.name} />
      <CardInfo>
        <div>
        <p>{camper.name}</p>
        <p>{camper.price}</p>
        <button>
        <HeartIcon width="16" height="16" />
        </button>
        </div>
        
        <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Использование компонента StarIcon */}
            <StarIcon width="16" height="16" />
            <p>{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LocationIcon width="16" height="16" />
            <p>{camper.location}</p>
            </div>
        
        </div>
        <p>{camper.description}</p>
        <CardButton>Show more ...</CardButton>
      </CardInfo>
    </Card>
  );
};

export default CamperCard;
