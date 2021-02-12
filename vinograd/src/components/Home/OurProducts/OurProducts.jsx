import { Link } from "react-router-dom";
import {
  OurProductsSection,
  OurProductsBlock,
  OurProductsProduct,
} from "./ourProductsStyles";
import testImg from "./Rectangle 968.jpg";

const OurProducts = () => {
  return (
    <OurProductsSection>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>Наша продукция</h4>
            <p>Виноград, саженцы винограда, черенки винограда</p>
          </div>
          <OurProductsBlock className="col-md-4">
            <Link to="/catalog" className="catalog-link">
              Перейти в каталог
            </Link>
          </OurProductsBlock>
          <OurProductsProduct className="col-md-4">
            <span className="marker">Распродажа</span>
            <img src={testImg} alt="" />
            <h5>Название сорта №1</h5>
          </OurProductsProduct>
          <OurProductsProduct className="col-md-4">
            <span className="marker">Распродажа</span>
            <img src={testImg} alt="" />
            <h5>Название сорта №1</h5>
          </OurProductsProduct>
        </div>
      </div>
    </OurProductsSection>
  );
};

export default OurProducts;
