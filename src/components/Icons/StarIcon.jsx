import sprite from '../../assets/icons/sprite.svg';
export const StarIcon = () => {
  return (
    <svg width={16} height={16}>
      <use href={`${sprite}#icon-star`}></use>
    </svg>
  );
};
