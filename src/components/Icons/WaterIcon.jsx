import sprite from '../../assets/icons/sprite.svg'
export const WaterIcon = () => {
  return (
    <svg width={20} height={20}>
      <use href={`${sprite}#icon-water`}></use>
    </svg>
  );
};
