import {
  HeaderBlock,
  ViberLink,
  ContactsBlock,
  DropDownToggleButton,
  DropDownContactsInfoBlock,
  DropDownContacts,
  AskQuestionButton,
} from "./headerStyles";
import { FaViber } from "react-icons/fa";
import logoImg from "./LOGO (1).svg";

const Header = () => {
  return (
    <HeaderBlock className="row">
      <div className="col-9 d-flex">
        <a href="#">
          <img src={logoImg} alt="logo" className="logo" />
        </a>
        <ContactsBlock className="d-flex flex-column">
          <a href="tel:0669999999">066-999-99-99</a>
          <a href="tel:0669999999">066-999-99-99</a>
          <ViberLink href="viber://add?number=380950000000" className="viber">
            <FaViber />
            Есть вайбер!
          </ViberLink>
        </ContactsBlock>

        <div className="dropdown contacts-dropdown">
          <DropDownToggleButton
            class="dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Контакты <span>↓</span>
          </DropDownToggleButton>
          <DropDownContacts
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
          >
            <DropDownContactsInfoBlock>
              <span>Интернет-магазин</span>
              <p>044 390 79 61</p>
              <p>050 385 04 68</p>
            </DropDownContactsInfoBlock>
            <DropDownContactsInfoBlock>
              <span>Режим работы</span>
              <p>Пн.-Пт. 9:00-21:00</p>
              <p>Сб. 10:00-18:00</p>
            </DropDownContactsInfoBlock>
            <DropDownContactsInfoBlock>
              <span>Адрес:</span>
              <p>г. Киев, ул. Мечникова 9</p>
            </DropDownContactsInfoBlock>
          </DropDownContacts>
        </div>
      </div>
      <div className="col-3 d-flex justify-content-end align-items-start">
        <AskQuestionButton data-hover={`Жми =)`}>
          <span>задайте нам вопрос</span>
        </AskQuestionButton>
      </div>
    </HeaderBlock>
  );
};

export default Header;
