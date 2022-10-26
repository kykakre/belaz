import React, {useState} from 'react';
import {Checkbox, Input} from "antd";
import style from "./Basket.module.scss"
import star from "../../assets/star.svg"
import Counter from "../Counter/Counter.jsx";
const BasketItem = (props) => {

    const[count,setCount]=useState( 1)

    return (
        <div className={style.card}>
            <Checkbox className={style.checkbox}/>
            <img src={props.img} className={style.img}/>
            <div className={style.info}>
                <div className={style.top}>
                    <div className={style.item}>
                        <div className={style.productName}>{props.title}</div>
                        <div className={style.grabe}>
                            <img src={star} className={style.star}/>
                            {props.grabe} ({props.totalGrabe} отзывов)
                        </div>
                    </div>
                    <div className={style.setting}>
                        <div className={style.settingText}>Удалить</div>
                        <div className={style.settingText}>В избранное</div>
                    </div>
                </div>
                <div className={style.under}>
                    <div>
                        <div className={style.counterText}>Количество:</div>
                        <Counter count={count} setCount={setCount}/>
                    </div>
                    <div className={style.end}>
                        <div className={style.total}>Итог</div>
                        <div className={style.prise}>{props.price * count} руб.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketItem;