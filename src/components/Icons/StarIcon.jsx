import sprite from '../../assets/icons/sprite.svg';
export const StarIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-star`}></use>
    </svg>
  );
};
