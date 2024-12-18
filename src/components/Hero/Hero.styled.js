import styled from 'styled-components'; 
import heroImage from '../../assets/images/heroImg.jpg';

export const HeroSection = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  color: #fff;
  padding-left: 40px; 
`;

export const HeroContent = styled.div`
  text-align: left;
 
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

  &:hover {
    background-color: #e04344;
  }
`;
