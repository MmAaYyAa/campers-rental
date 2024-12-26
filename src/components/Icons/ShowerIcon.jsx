import sprite from '../../assets/icons/sprite.svg'
const ShowerIcon = () => {
  return (
    <svg width={20} height={20}>
      <use href={`${sprite}#icon-shower`}></use>
    </svg>
  );
};
export default ShowerIcon