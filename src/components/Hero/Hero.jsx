import { HeroSection, HeroContent, HeroButton, HeroImage } from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <HeroImage /> 
      <HeroContent>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <HeroButton>View Now</HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
