import React from 'react';
import style from "./LkBlock.module.scss"
import {NavLink} from "react-router-dom";
const LkBlockOrder = (props) => {
    return (
        <div className={style.blockNav}>
            <div className={style.title}>
                Заказы
            </div>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link} `
                }
                to="basket/"
            >
                Корзина
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link} `
                }
                to="favorite/"
            >
                Избранное
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link} `
                }
                to="history/"
            >
                История просмотров
            </NavLink>
        </div>
    );
};

export default LkBlockOrder;