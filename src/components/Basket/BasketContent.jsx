import React from 'react';
import BasketBlock from "./BasketBlock.jsx";
import style from "./Basket.module.scss"
const Basket = (props) => {
    return (
        <div className={style.content}>
            <div className={style.block}>
                <BasketBlock/>
            </div>
            <div className={style.sidebar}></div>
        </div>
    );
};

export default Basket;