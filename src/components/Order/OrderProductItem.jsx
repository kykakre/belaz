import React from 'react';
import style from "../Basket/Basket.module.scss";
import {Checkbox} from "antd";
import star from "../../assets/star.svg";
import Counter from "../Counter/Counter.jsx";

const OrderProductItem = (props) => {
    return (
        <div className={style.card}>
           
            <div className={style.checkbox}>{props.product.id}</div>
            <img src={props.product.img} className={style.img}/>
            <div className={style.info}>
                <div className={style.top}>
                    <div className={style.item}>
                        <div className={style.productName}>{props.product.title}</div>
                        <div className={style.grabe}>
                            <img src={star} className={style.star}/>
                            {props.product.grabe} ({props.product.totalGrabe} отзывов)
                        </div>
                    </div>
                    <div className={style.setting}>
                        <div className={style.settingText}>Перейти</div>
                    </div>
                </div>
                <div className={style.under}>
                    <div>
                        <div className={style.counterText}>Количество: 1</div>
                    </div>
                    <div className={style.end}>
                        <div className={style.total}>Итог</div>
                        <div className={style.prise}>{props.product.price} руб.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderProductItem;