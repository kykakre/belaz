import React from "react";
import style from "./Benefits.module.scss";
export default function BenefitsItem(props) {
  return (
    <div className={style.flex}>
      <img src={props.icon} className={style.icon} />
      <div>
        <div className={style.titleItem}>{props.title}</div>
        <div className={style.text}>{props.text}</div>
      </div>
    </div>
  );
}
