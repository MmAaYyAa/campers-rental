import styled from 'styled-components'; 
import heroImage from '../../assets/images/heroImg.jpg';

export const HeroSection = styled.section`
    height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  color: #fff;
  padding-left: 40px;
  overflow: hidden;
`;

export const HeroImage = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(-1); /* Поворачивает только фон */
  transform-origin: center center;
`;

  export const HeroContent = styled.div`
  text-align: left;
  z-index: 1;

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const HeroButton = styled.button`
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 200px;
  margin-top: 40px;

  &:hover {
    background-color: #e04344;
  }
`;
