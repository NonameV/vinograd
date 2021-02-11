import { NavAndCartHeroSection, Nav } from "./NavAndCartStyles";
import navImg from "./quadrat.svg";

const NavAndCart = () => {
  return (
    <NavAndCartHeroSection className="row">
      <div className="col-md-6 d-flex justify-content-start align-items-start">
        <Nav>
          <ul>
            <li>
              <a href="#">
                <img src={navImg} alt="" /> главная
              </a>
            </li>
            <li>
              <a href="#">
                <img src={navImg} /> каталог
              </a>
            </li>
          </ul>
        </Nav>
      </div>
      <div className="col-md-6 justify-content-end align-items-start"></div>
    </NavAndCartHeroSection>
  );
};

export default NavAndCart;
