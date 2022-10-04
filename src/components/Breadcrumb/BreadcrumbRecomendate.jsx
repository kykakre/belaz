import React from 'react';
import style from "./Breadcrumb.module.scss";
import {NavLink} from "react-router-dom";

const BreadcrumbRecomendate = () => {
    return (
        <div className={style.flex}>
            <NavLink to="/catalog" className={style.link}>Каталог </NavLink>
            <div className={style.paste}> / </div>
            <NavLink to="/recommend" className={style.link}>Мы рекомендуем</NavLink>
        </div>
    );
};

export default BreadcrumbRecomendate;