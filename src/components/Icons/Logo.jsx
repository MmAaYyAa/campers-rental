import sprite from '../../assets/icons/sprite.svg'
const Logo = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-Logo`}></use>
    </svg>
  );
};
export default Logo