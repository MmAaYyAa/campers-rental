import sprite from '../../assets/icons/sprite.svg'
export const HeartIcon = () => {
  return (
    <svg width={24} height={21}>
      <use href={`${sprite}#icon-heart`}></use>
    </svg>
  );
};
