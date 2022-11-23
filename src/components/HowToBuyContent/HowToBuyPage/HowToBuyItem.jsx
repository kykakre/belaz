import React from "react";
import style from "./HowToBuy.module.scss";
const HowToBuyItem = (props) => {
  return (
    <>
      {props.subType === props.number ? (
        <div className={style.item}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HowToBuyItem;
