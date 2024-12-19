import sprite from '../../assets/icons/sprite.svg'
const FullyIntegratedIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-fully-integrated`}></use>
    </svg>
  );
};
export default FullyIntegratedIcon