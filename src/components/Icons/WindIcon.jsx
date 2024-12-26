import sprite from '../../assets/icons/sprite.svg'
export const WindIcon = () => {
  return (
    <svg width={20} height={20}>
      <use href={`${sprite}#icon-wind`}></use>
    </svg>
  );
};
