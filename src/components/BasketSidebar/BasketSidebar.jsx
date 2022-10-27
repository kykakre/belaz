import React from 'react';
import style from "./BasketSidebar.module.scss"
import {NavLink} from "react-router-dom";
const BasketSidebar = () => {
    return (
        <div className={style.sidebar}>
            <NavLink to="order" className={style.btn}>Перейти к оформлению</NavLink>
            <div className={style.description}>Доступные способы и время доставки можно выбрать при оформлении заказа</div>
            <div className={style.card}>
                <div className={style.flex}>
                    <div className={style.title}>Ваша корзина</div>
                    <div className={style.info}>1 товар • 5,1 кг</div>
                </div>
                <div className={style.flex}>
                    <div className={style.text}>Товары <span>(1)</span></div>
                    <div className={style.count}>5 781 ₽</div>
                </div>
                <div className={style.flex}>
                    <div className={style.text}>Скидка</div>
                    <div className={style.discount}>- 1 200 ₽</div>
                </div>
            </div>
            <div className={style.flex}>
                <div className={style.totalTitle}>Общая стоимость</div>
                <div className={style.totalCount}>5 781 ₽</div>

            </div>
        </div>
    );
};

export default BasketSidebar;