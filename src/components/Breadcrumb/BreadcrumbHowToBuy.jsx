import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Breadcrumb.module.scss";

const BreadcrumbHowToBuy = () => {
    return (
        <div className={style.flex}>
            <NavLink to="/" className={style.link}>Главная </NavLink>
            <div className={style.paste}> / </div>
            <NavLink to="/howToBuy" className={style.link}>Помощь</NavLink>
        </div>
    );
};

export default BreadcrumbHowToBuy;