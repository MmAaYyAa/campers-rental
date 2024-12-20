import sprite from '../../assets/icons/sprite.svg'
export const HeartIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-heart`}></use>
    </svg>
  );
};
