import React, { useState } from "react";
import style from "./DetailProduct.module.scss";
import Counter from "../Counter/Counter.jsx";
import star from "../../assets/star.svg";
import favorite from "../../assets/favorite.svg";
export default function DetailProduct(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={style.flex}>
        <img
          className={style.img}
          src={"https://s.stats.cfd/" + props.detail?.img}
        />
        <div className={style.item}>
          <div className={style.grabe}>
            <img src={star} className={style.icon} />
            <div className={style.grabeText}>Нет оценок</div>
          </div>
          <div className={style.title}>{props.detail?.title}</div>
          <div className={style.count}>Количество:</div>
          <Counter count={count} setCount={setCount} />
          <div className={style.count}>Цена:</div>
          <div className={style.countFlex}>
            <div className={style.countTextFlex}>
              <div className={style.countPrice}>{props.detail?.price} ₽</div>
              <div className={style.countText}>Розничная цена</div>
            </div>
            <div className={style.countBtnFlex}>
              <div className={style.favorite}>
                <img src={favorite} className={style.favoriteIcon} />
              </div>
              <div className={style.basket}>В корзину</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.descriptionTitle}>Описание товара</div>
      <div className={style.description}>{props.detail?.description}</div>
    </>
  );
}
