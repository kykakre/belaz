import React from "react";
import style from "./Category.module.scss";
import picture from "../../assets/nullPicture.png";
import { NavLink } from "react-router-dom";
const CategoryItem = (props) => {
  return (
    <div className={style.card}>
      <img
        src={props.img === null ? picture : "https://s.stats.cfd/" + props.img}
        className={style.img}
        alt="img"
      />
      <div className={style.title}>{props.title}</div>
      <div className={style.description}>{props.description}</div>
      <NavLink to={"/category/" + props.id} className={style.nav}>
        Перейти
      </NavLink>
    </div>
  );
};

export default CategoryItem;
