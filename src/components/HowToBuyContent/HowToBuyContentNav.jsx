import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./HowToBuyContent.module.scss";

const HowToBuyContentNav = () => {
    return (
        <div className={style.flexNav}>
            <NavLink to="payment" onClick={()=> window.scrollTo(0,0)} className={({ isActive }) =>
                isActive ? `${style.linkContent} ${style.activeContent}` : `${style.linkContent} `
            } >Условия оплаты</NavLink>
            <NavLink to="delivery" onClick={()=> window.scrollTo(0,0)} className={({ isActive }) =>
                isActive ? `${style.linkContent} ${style.activeContent}` : `${style.linkContent} `
            }>Условия доставки</NavLink>
            <NavLink to="guarantee" onClick={()=> window.scrollTo(0,0)} className={({ isActive }) =>
                isActive ? `${style.linkContent} ${style.activeContent}` : `${style.linkContent} `
            }>Гарантии на товар</NavLink>
            <NavLink to="" onClick={()=> window.scrollTo(0,0)} className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.navLink}` : `${style.navLink} `
            }>Главная</NavLink>

        </div>
    );
};

export default HowToBuyContentNav;