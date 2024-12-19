import sprite from '../../assets/icons/sprite.svg'
const ShowerIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-shower`}></use>
    </svg>
  );
};
export default ShowerIcon