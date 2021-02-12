import { Link } from "react-router-dom";
import { OpenOrderSection } from "./openOrderStyles";
import background from "./bg img faq.png";
const OpenOrder = () => {
  return (
    <OpenOrderSection>
      <img src={background} alt="" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>
              открыт прием заказов на весну <span className="year">2021</span>{" "}
            </h2>
            <Link to="/catalog" className="catalogLink">
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    </OpenOrderSection>
  );
};

export default OpenOrder;
