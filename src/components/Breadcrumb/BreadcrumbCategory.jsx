import React from 'react';
import style from "./Breadcrumb.module.scss"
import {NavLink} from "react-router-dom";
const BreadcrumbCategory = () => {
    return (
        <div className={style.flex}>
            <NavLink to="/" className={style.link}>Главная </NavLink>
            <div className={style.paste}> / </div>
            <NavLink to="/category" className={style.link}>Категории</NavLink>

        </div>
    );
};

export default BreadcrumbCategory;