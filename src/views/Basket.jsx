import React from 'react';
import Title from "../components/Title/Title.jsx"
import Search from "../components/Search/Search.jsx";
import BreadcrumbsBasket from "../components/Breadcrumb/BreadcrumbsBasket.jsx";
import BasketContent from "../components/Basket/BasketContent.jsx"
const Basket = (props) => {
    return (
        <div className="content">
            <Search/>
            <BreadcrumbsBasket/>
            <Title title="Корзина"/>
            <BasketContent popular={props.popular} product={props.product}/>

        </div>
    );
};

export default Basket;