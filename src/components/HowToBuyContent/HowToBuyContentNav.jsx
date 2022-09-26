import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./HowToBuyContent.module.scss";

const HowToBuyContentNav = () => {
    return (
        <div className={style.flexNav}>
            <NavLink to="payment" className={({ isActive }) =>
                isActive ? `${style.linkContent} ${style.activeContent}` : `${style.linkContent} `
            } >Условия оплаты</NavLink>
            <NavLink to="delivery" className={({ isActive }) =>
                isActive ? `${style.linkContent} ${style.activeContent}` : `${style.linkContent} `
            }>Условия доставки</NavLink>
            <NavLink to="guarantee" className={({ isActive }) =>
                isActive ? `${style.linkContent} ${style.activeContent}` : `${style.linkContent} `
            }>Гарантии на товар</NavLink>
            <NavLink to="" className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.navLink}` : `${style.navLink} `
            }>Главная</NavLink>

        </div>
    );
};

export default HowToBuyContentNav;