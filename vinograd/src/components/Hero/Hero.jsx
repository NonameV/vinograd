import { HeroSection } from "./HeroStyle";
import Header from "./Header/Header";
import NavAndCart from "../Hero/NavAndCart/NavAndCart";
import HomeHero from "./HomeHero/HomeHero";
const Hero = () => {
  return (
    <HeroSection>
      <div className="container">
        <Header />
        <NavAndCart />
        <HomeHero />
      </div>
    </HeroSection>
  );
};

export default Hero;
