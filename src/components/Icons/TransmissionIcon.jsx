import sprite from '../../assets/icons/sprite.svg'
export const TransmissionIcon = () => {
  return (
    <svg width={20} height={20}>
      <use href={`${sprite}#icon-automatic`}></use>
    </svg>
  );
};
