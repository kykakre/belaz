import React from "react";
import style from "./Breadcrumb.module.scss";
import { NavLink } from "react-router-dom";
export default function BreadcrumbDetailProduct(props) {
  console.log(props.detail);
  return (
    <div className={style.flex}>
      <NavLink to="/catalog" className={style.link}>
        Каталог
      </NavLink>
      <div className={style.paste}> / </div>
      <NavLink to="/catalog" className={style.link}>
        {props.detail?.categories.title}
      </NavLink>
      <div className={style.paste}> / </div>
      <div className={style.link}>{props.detail?.title}</div>
    </div>
  );
}
