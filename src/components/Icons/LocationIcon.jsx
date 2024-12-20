import sprite from '../../assets/icons/sprite.svg'
export const LocationIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-map`}></use>
    </svg>
  );
};
