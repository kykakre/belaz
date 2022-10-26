import React from 'react';
import style from "./Breadcrumb.module.scss";
import {NavLink} from "react-router-dom";

const BreadcrumbsBasket = () => {
    return (
        <div className={style.flex}>
            <NavLink to="/lk" className={style.link}>Профиль </NavLink>
            <div className={style.paste}> / </div>
            <NavLink to="/lk/basket" className={style.link}>Корзина</NavLink>
        </div>
    );
};

export default BreadcrumbsBasket;