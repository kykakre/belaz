import React from 'react';
import style from "./Product.module.scss"
import star from "../../assets/star.svg"
import buy from "../../assets/buy.svg"
import favorite from "../../assets/favorite.svg"
const ProductItem = (props) => {
    return (
        <div className={style.card}>
            <div className={style.contain}>
                <img src={props.img} className={style.productImg} alt="product"/>
                {props.special ? <div className={style.special}>Спецпредложение</div> : <></> }
                <img src={favorite} className={style.favorite} alt="favorite"/>

            </div>
            <div className={style.title}>{props.title}</div>
            <div className={style.flex}>
                <img src={star} className={style.star} alt="grabe"/>
                <div className={style.grabe}>{props.grabe} ({props.totalGrabe} оценок)</div>
            </div>
            <div className={style.spaceBetween}>
                <div className={style.price}>{props.price} ₽</div>
                <img src={buy} className={style.buy} alt="icon"/>
            </div>
        </div>
                )
};

export default ProductItem;