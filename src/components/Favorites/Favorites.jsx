import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/catalog/catalogSelectors';
import CamperCard from './CamperCard';

const FavoritesList = () => {
    const favorites = useSelector(selectFavorites);

    if (favorites.length === 0) {
        return <p>No favorites added yet.</p>;
    }

    return (
        <div>
            {favorites.map(camper => (
                <CamperCard key={camper.id} camper={camper} />
            ))}
        </div>
    );
};

export default FavoritesList;