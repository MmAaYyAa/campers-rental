import sprite from '../../assets/icons/sprite.svg'
export const VanIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-van`}></use>
    </svg>
  );
};
