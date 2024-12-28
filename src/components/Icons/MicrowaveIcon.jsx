import sprite from '../../assets/icons/sprite.svg'
export const MicrowaveIcon = () => {
  return (
    <svg width={20} height={20}>
      <use href={`${sprite}#icon-microwave`}></use>
    </svg>
  );
};
