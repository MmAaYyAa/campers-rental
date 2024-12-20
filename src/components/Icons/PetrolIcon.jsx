import sprite from '../../assets/icons/sprite.svg'
export const PetrolIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-petrol`}></use>
    </svg>
  );
};
