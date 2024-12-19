import sprite from '../../assets/icons/sprite.svg'
const KitchenIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-cup-hot`}></use>
    </svg>
  );
};
export default KitchenIcon