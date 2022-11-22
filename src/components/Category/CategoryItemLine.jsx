import React from "react";
import style from "./Category.module.scss";
import { NavLink } from "react-router-dom";

const CategoryItemLine = (props) => {
  console.log(props);
  return (
    <div className={style.cardLine}>
      <img
        src={props.img === null ? picture : "https://s.stats.cfd/" + props.img}
        className={style.imgLong}
        alt="img"
      />
      <div className={style.column}>
        <div className={style.flex}>
          <div className={style.titleLong}>{props.title}</div>
          <div className={style.countProduct}>{props.title}</div>
        </div>
        <div className={style.descriptionLong}>{props.description}</div>
        <div className={style.flexEnd}>
          <NavLink to={"/category/" + props.id} className={style.navLong}>
            Перейти
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryItemLine;
