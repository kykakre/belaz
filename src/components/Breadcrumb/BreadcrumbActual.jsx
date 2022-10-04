import React from 'react';
import style from "./Breadcrumb.module.scss";
import {NavLink} from "react-router-dom";

const BreadcrumbActual = () => {
    return (
        <div className={style.flex}>
            <NavLink to="/catalog" className={style.link}>Каталог </NavLink>
            <div className={style.paste}> / </div>
            <NavLink to="/actual" className={style.link}>Актуальные</NavLink>

        </div>
    );
};

export default BreadcrumbActual;