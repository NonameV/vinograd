import { NavAndCartHeroSection, Nav, CartButton } from "./NavAndCartStyles";
import navImg from "./quadrat.svg";
import cartImg from "./Vector.svg";

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
      <div className="col-md-6 d-flex justify-content-end align-items-start">
        <CartButton>
          <button>
            <img src={cartImg} alt="" /> корзина: 0
          </button>
          <span>
            Ваш заказ на сумму: <span className="price">0</span> грн
          </span>
        </CartButton>
      </div>
    </NavAndCartHeroSection>
  );
};

export default NavAndCart;
