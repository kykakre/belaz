import React from 'react';
import style from "./Breadcrumb.module.scss";
import {NavLink} from "react-router-dom";

const BreadcrumbPopular = () => {
    return (
        <div className={style.flex}>
            <NavLink to="/catalog" className={style.link}>Каталог </NavLink>
            <div className={style.paste}> / </div>
            <NavLink to="/popular" className={style.link}>Популярное</NavLink>
        </div>
    );
};

export default BreadcrumbPopular;