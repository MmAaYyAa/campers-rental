import sprite from '../../assets/icons/sprite.svg'
export const FridgeIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-fridge`}></use>
    </svg>
  );
};
