import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";
import ModalItem from "../Modal/ModalItem";
import NavIcon from "./NavIcon";
const Nav = () => {
  const [token, setToken] = useState("");

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
        {token ? (
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
          <></>
        )}
      </ul>
      {token ? <NavIcon /> : ""}
      {token ? (
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
