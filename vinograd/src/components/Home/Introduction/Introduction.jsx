import { IntroductionSection } from "./introductionStyles";
import background from "./head bg.jpg";

const Introduction = () => {
  return (
    <IntroductionSection bg={background}>
      <img src={background} alt="introduction_background" />
      <div className="container">
        <div className="row">
          <h2>
            Добро пожаловать в интернет-магазин саженцев элитных сортов
            винограда
          </h2>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн.{" "}
          </p>
        </div>
      </div>
    </IntroductionSection>
  );
};

export default Introduction;
