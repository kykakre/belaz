import React from 'react';
import style from "./Breadcrumb.module.scss";
import {NavLink} from "react-router-dom";

const BreadcrumbOrder = () => {
    return (
        <div className={style.flex}>
            <NavLink to="/lk" className={style.link}>Профиль </NavLink>
            <div className={style.paste}> / </div>
            <NavLink to="/lk/basket" className={style.link}>Корзина</NavLink>
            <div className={style.paste}> / </div>
            <NavLink to="/lk/basket/order" className={style.link}>Оформление заказа</NavLink>
        </div>
    );
};

export default BreadcrumbOrder;