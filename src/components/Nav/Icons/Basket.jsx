import React from "react";
import basket from "../../../assets/headerIcon/basket.svg";
import style from "../Nav.module.scss";

export default function Basket() {
  return <img src={basket} className={style.icon} />;
}
