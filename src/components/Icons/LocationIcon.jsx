import sprite from '../../assets/icons/sprite.svg'
export const LocationIcon = () => {
  return (
    <svg width={16} height={16}>
      <use href={`${sprite}#icon-map`}></use>
    </svg>
  );
};
