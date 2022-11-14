import React from "react";
import style from "./Preloader.module.scss";
import icon from "../../assets/logo.svg";
export default function Preloader() {
  return (
    <div className={style.block}>
      <div className={style.icon}>
      <img src={icon} className={style.logo} />

      </div>

    </div>
  );
}
