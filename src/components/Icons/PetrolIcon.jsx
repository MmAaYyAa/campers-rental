import sprite from '../../assets/icons/sprite.svg'
export const PetrolIcon = () => {
  return (
    <svg width={20} height={20}>
      <use href={`${sprite}#icon-petrol`}></use>
    </svg>
  );
};
