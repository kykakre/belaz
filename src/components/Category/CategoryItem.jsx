import React from 'react';
import style from "./Category.module.scss"
import {NavLink} from "react-router-dom";
const CategoryItem = (props) => {
    return (
        <div className={style.card}>
            <img src={props.img} className={style.img} alt="img"/>
            <div className={style.title}>{props.title}</div>
            <div className={style.description}>{props.description}</div>
            <NavLink to="" className={style.nav}>Перейти</NavLink>
        </div>
    );
};

export default CategoryItem;