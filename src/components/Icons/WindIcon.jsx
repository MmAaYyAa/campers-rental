import sprite from '../../assets/icons/sprite.svg'
const WindIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-wind`}></use>
    </svg>
  );
};
export default WindIcon