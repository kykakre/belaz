import React from 'react';
import style from "./LkBlock.module.scss"
import {NavLink} from "react-router-dom";
const LkBlockOther = (props) => {
    return (
        <div className={style.blockNav}>
            <div className={style.title}>
                Другое
            </div>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link} `
                }
                to="payment/"
            >
                Условия оплаты
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link} `
                }
                to="delivery/"
            >
                Условия доставки
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link} `
                }
                to="guarantee/"
            >
                Гарантия на товар
            </NavLink>
        </div>
    );
};

export default LkBlockOther;