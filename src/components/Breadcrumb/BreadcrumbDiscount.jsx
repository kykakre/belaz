import React from 'react';
import style from "./Breadcrumb.module.scss";
import {NavLink} from "react-router-dom";

const BreadcrumbDiscount = () => {
    return (
        <div className={style.flex}>
            <NavLink to="/" className={style.link}>Главная </NavLink>
            <div className={style.paste}> / </div>
            <NavLink to="/discount" className={style.link}>Скидки и акции</NavLink>

        </div>
    );
};

export default BreadcrumbDiscount;