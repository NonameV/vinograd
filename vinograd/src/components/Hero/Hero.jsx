import { HeroSection } from "./HeroStyle";
import Header from "./Header/Header";
import NavAndCart from "../Hero/NavAndCart/NavAndCart";
const Hero = () => {
  return (
    <HeroSection>
      <div className="container">
        <Header />
        <NavAndCart />
      </div>
    </HeroSection>
  );
};

export default Hero;
