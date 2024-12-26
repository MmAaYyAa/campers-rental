import sprite from '../../assets/icons/sprite.svg'
export const KitchenIcon = () => {
  return (
    <svg width={20} height={20}>
      <use href={`${sprite}#icon-cup-hot`}></use>
    </svg>
  );
};
