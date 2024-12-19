import sprite from '../../assets/icons/sprite.svg'
const WaterIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-water`}></use>
    </svg>
  );
};
export default WaterIcon