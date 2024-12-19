import sprite from '../../assets/icons/sprite.svg';
const StarIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-star`}></use>
    </svg>
  );
};
export default StarIcon