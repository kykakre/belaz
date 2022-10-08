import React from 'react';
import style from "./Breadcrumb.module.scss";
import {NavLink} from "react-router-dom";

const BreadcrumbNews = () => {
    return (
        <div className={style.flex}>
            <NavLink to="/" className={style.link}>Главная </NavLink>
            <div className={style.paste}> / </div>
            <NavLink to="/news" className={style.link}>Новости</NavLink>
        </div>
    );
};

export default BreadcrumbNews;