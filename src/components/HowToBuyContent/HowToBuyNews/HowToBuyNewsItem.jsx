import React from "react";
import style from "./HowToBuyNews.module.scss";
const HowToBuyNewsItem = (props) => {
  const year = new Date(Date.parse(props.createdAt)).getFullYear();
  const mounth = new Date(Date.parse(props.createdAt)).getMonth();
  const day = new Date(Date.parse(props.createdAt)).getDay();

  return (
    <div className={style.card}>
      <div className={style.data}>
        {day}-{mounth}-{year}
      </div>
      <div className={style.leed}>{props.name}</div>
    </div>
  );
};

export default HowToBuyNewsItem;
