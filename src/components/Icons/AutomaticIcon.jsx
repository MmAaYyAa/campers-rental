import sprite from '../../assets/icons/sprite.svg'
const AutomaticIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-automatic`}></use>
    </svg>
  );
};
export default AutomaticIcon