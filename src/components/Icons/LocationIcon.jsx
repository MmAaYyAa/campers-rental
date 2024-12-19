import sprite from '../../assets/icons/sprite.svg'
const LocationIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-map`}></use>
    </svg>
  );
};
export default LocationIcon