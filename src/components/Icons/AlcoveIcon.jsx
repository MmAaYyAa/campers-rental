import sprite from '../../assets/icons/sprite.svg'
export const AlcoveIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-alcove`}></use>
    </svg>
  );
};
