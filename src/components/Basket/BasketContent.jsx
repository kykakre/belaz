import React from 'react';
import BasketBlock from "./BasketBlock.jsx";
import style from "./Basket.module.scss"
import Title from "../Title/Title.jsx";
import Product from "../Product/Product.jsx";
import BasketSidebar from "../BasketSidebar/BasketSidebar.jsx";
const BasketContent = (props) => {
    return (
        <>
            <div className={style.content}>
                <div className={style.block}>
                    <BasketBlock product={props.product.slice(0,5)}/>

                </div>
                <div className={style.sidebar}>
                    <BasketSidebar/>
                </div>
            </div>
            <Title arrow={true} title={"Мы рекомендуем"} link="/recommend"/>
            <Product product={props.popular} slice={5}/>
        </>

    );
};

export default BasketContent;