import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavUnder.module.scss";
export default function NavUnder() {
  return (
    <ul>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="services"
        >
          Услуги
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="discount"
        >
          Скидки
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="specialOffers"
        >
          Спецпредложения
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="popular"
        >
          Популярные
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="actual"
        >
          Актуальные
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="recommend"
        >
          Мы рекомендуем
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="howToBuy"
        >
          Как купить
        </NavLink>
      </li>
    </ul>
  );
}
