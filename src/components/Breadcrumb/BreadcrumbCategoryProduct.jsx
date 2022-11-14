import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Breadcrumb.module.scss";

const BreadcrumbCategoryProduct = () => {
    return (
        <div className={style.flex}>
            <NavLink to="/" className={style.link}>Главная </NavLink>
            <div className={style.paste}> / </div>
            <NavLink to="/category" className={style.link}>Категории</NavLink>
        </div>
    );
};

export default BreadcrumbCategoryProduct;