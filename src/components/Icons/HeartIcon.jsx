import sprite from '../../assets/icons/sprite.svg'
const HeartIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-heart`}></use>
    </svg>
  );
};
export default HeartIcon