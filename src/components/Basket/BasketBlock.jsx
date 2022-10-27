import React from 'react';
import style from "./Basket.module.scss"
import {Checkbox} from "antd";
import BasketItem from "./BasketItem.jsx";
import BasketNotFound from "./BasketNotFound.jsx";
const BasketBlock = (props) => {

    let item =props.product.map((e)=>(
        <BasketItem id={e.id} key={e.key} img={e.img} title={e.title} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price}/>
    ))


    return (
        <>
            <div className={style.flexBlock}>
                <Checkbox id="all" type="checkbox">Выбрать все</Checkbox>
                <div className={style.delete}>Удалить выбранные </div>
            </div>
            {props.product.length === 0? <BasketNotFound/>:item}
        </>
    );
};

export default BasketBlock;