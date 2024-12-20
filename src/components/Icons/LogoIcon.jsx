import sprite from '../../assets/icons/sprite.svg'
const LogoIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-Logo`}></use>
    </svg>
  );
};
export default LogoIcon