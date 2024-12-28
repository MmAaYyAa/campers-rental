import sprite from '../../assets/icons/sprite.svg'
export const TvIcon = () => {
  return (
    <svg width={20} height={20}>
      <use href={`${sprite}#icon-tv`}></use>
    </svg>
  );
};
