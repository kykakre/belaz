import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";
import ModalItem from "../Modal/ModalItem";
import NavIcon from "./NavIcon";
const Nav = () => {
  return (
    <div className={style.nav}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link} `
            }
            to=""
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link} `
            }
            to="catalog"
          >
            Каталог
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link} `
            }
            to="category"
          >
            Категории
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link} `
            }
            to="news"
          >
            Новости
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link} `
            }
            to="contact"
          >
            Контакты
          </NavLink>
        </li>
        {localStorage.getItem("token") !== undefined ? (
          <li>
            <NavLink
              to="/lk"
              className={({ isActive }) =>
                isActive ? `${style.link} ${style.active}` : `${style.link} `
              }
            >
              Кабинет
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
      {localStorage.getItem("token") !== undefined ? <NavIcon /> : ""}
      {localStorage.getItem("token") !== undefined ? (
        ""
      ) : (
        <>
          <ModalItem />
        </>
      )}
    </div>
  );
};

export default Nav;
