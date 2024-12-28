import sprite from '../../assets/icons/sprite.svg'
export const RadioIcon = () => {
  return (
    <svg width={20} height={20}>
      <use href={`${sprite}#icon-radio`}></use>
    </svg>
  );
};
