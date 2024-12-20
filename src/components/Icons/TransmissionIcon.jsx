import sprite from '../../assets/icons/sprite.svg'
export const TransmissionIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-automatic`}></use>
    </svg>
  );
};
