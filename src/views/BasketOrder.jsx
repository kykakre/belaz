import React from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbOrder from "../components/Breadcrumb/BreadcrumbOrder.jsx";
import Title from "../components/Title/Title.jsx";
import Order from "../components/Order/Order.jsx";

const BasketOrder = (props) => {
    return (
        <div className="content">
            <Search/>
            <BreadcrumbOrder/>
            <Title title="Оформление заказа"/>
            <Order product={props.product} popular={props.popular}/>
        </div>
    );
};

export default BasketOrder;