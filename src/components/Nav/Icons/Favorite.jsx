import React from "react";
import favorite from "../../../assets/headerIcon/favorite.svg";
import style from "../Nav.module.scss";

export default function Favorite() {
  return <img src={favorite} className={style.icon} />;
}
