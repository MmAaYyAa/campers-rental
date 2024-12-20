import sprite from '../../assets/icons/sprite.svg'
export const KitchenIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-cup-hot`}></use>
    </svg>
  );
};
