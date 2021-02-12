import { HeroHomeSection } from "./homeHeroStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
const HomeHero = () => {
  return (
    <HeroHomeSection>
      <h1>саженцы элитных сортов винограда с доставкой на дом</h1>
      <p>
        Мы выращиваем более 50 сортов винограда и отобираем только
        лучшие,отсортировав их по назначению, селекции и срокам созревания.
      </p>
      <Link to="/catalog" className="catalogLink">
        Перейти в каталог
      </Link>
    </HeroHomeSection>
  );
};

export default HomeHero;
