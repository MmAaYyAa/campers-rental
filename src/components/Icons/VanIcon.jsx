import sprite from '../../assets/icons/sprite.svg'
const VanIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-van`}></use>
    </svg>
  );
};
export default VanIcon