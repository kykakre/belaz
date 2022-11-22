import React from "react";
import style from "./Footer.module.scss";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
const Footer = (props) => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.item}>
          <img src={logo} className={style.logo} />
          <div className={style.text}>
            620012, город Екатеринбург, улица Посадская, 16а, корпус И,
            помещение И-101
          </div>
          <div className={style.text}>ПН — ПТ: с 9:00 до 17:00</div>
        </div>
        <div className={style.item}>
          <div className={style.title}>Каталог</div>
          <NavLink to="discount" className={style.link}>
            Скидки
          </NavLink>
          {/*<NavLink to="special" className={style.link}>Спецпредложение</NavLink>*/}
          <NavLink to="popular" className={style.link}>
            Популярное
          </NavLink>
          <NavLink to="actual" className={style.link}>
            Актуальные
          </NavLink>
          <NavLink to="recommend" className={style.link}>
            Мы рекомендуем
          </NavLink>
        </div>
        <div className={style.item}>
          <div className={style.title}>Навигация</div>
          <NavLink
            to="catalog"
            onClick={() => window.scrollTo(0, 0)}
            className={style.link}
          >
            Каталог
          </NavLink>
          <NavLink
            to="news"
            onClick={() => window.scrollTo(0, 0)}
            className={style.link}
          >
            Новости
          </NavLink>
          <NavLink
            to="howToBuy"
            onClick={() => window.scrollTo(0, 0)}
            className={style.link}
          >
            Как купить
          </NavLink>
          <NavLink
            to="aboutCompany"
            onClick={() => window.scrollTo(0, 0)}
            className={style.link}
          >
            О компании
          </NavLink>
          <NavLink
            to="delivery"
            onClick={() => window.scrollTo(0, 0)}
            className={style.link}
          >
            Доставка и оплата
          </NavLink>
        </div>
        <img
          src={arrow}
          onClick={() => window.scrollTo(0, 0)}
          className={style.arrow}
        />
        <div className={style.itemLast}>
          <div className={style.linkPhone}>Заказать звонок</div>
          <a href="tel:+73432875732" className={style.phone}>
            +7 (343) 287-57-32
          </a>
          <a href="mailto:info@agregatekb.ru" className={style.text}>
            info@agregatekb.ru
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
