import sprite from '../../assets/icons/sprite.svg'
export const LocationIcon = () => {
  return (
    <svg width={20} height={20}> 
      <use href={`${sprite}#icon-map`}></use>
    </svg>
  );
};
