import sprite from '../../assets/icons/sprite.svg'
const WaterIcon = () => {
  return (
    <svg width={20} height={20}>
      <use href={`${sprite}#icon-water`}></use>
    </svg>
  );
};
export default WaterIcon