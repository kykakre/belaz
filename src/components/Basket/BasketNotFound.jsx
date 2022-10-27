import React from 'react';
import style from "./Basket.module.scss"
import basket from "../../assets/shopping.svg"
import {NavLink} from "react-router-dom";
const BasketNotFound = () => {
    return (
        <div className={style.blockNotFound}>
            <img className={style.shop} src={basket}/>
            <NavLink to="/catalog" className={style.column}>
                <div className={style.basket}>Корзина пустая</div>
                <div>Вперед за покупками</div>
            </NavLink>
        </div>
    );
};

export default BasketNotFound;