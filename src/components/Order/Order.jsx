import React from 'react';
import style from "./Order.module.scss"
import BasketSidebar from "../BasketSidebar/BasketSidebar.jsx";
import OrderPay from "./OrderPay.jsx";
import OrderDelivery from "./OrderDelivery.jsx";
import {NavLink} from "react-router-dom";
import Title from "../Title/Title.jsx";
import Product from "../Product/Product.jsx";
import truck from "../../assets/truck.svg"
import mail from "../../assets/mailSend.svg"
import marker from "../../assets/marker.svg"
import delivery from "../../assets/delivery-parcel.svg"
import OrderProductItem from "./OrderProductItem.jsx";

const Order = (props) => {

    const data =[

        {
            id:1,
            icon:marker,
            text:"Пункт AgregatEKB",
            description:"Россия, Санкт-Петербург, Наб. Обводного канала, д. 138, к. 6, лит. А",
        },
    {
        id:2,
            icon:mail,
        text:"Почта России",
        description:'Выберите, чтобы ввести адрес',
        },
        {
            id:3,
            icon:delivery,
            text:"Самовывоз",
            description:'Выберите, чтобы ввести адрес',
        },
        {
            id:4,
            icon:truck,
            text:"Доставка",
            description:'Выберите, чтобы ввести адрес',
        },
    ]



    return (
        <>
            <div className={style.content}>
                <div className={style.block}>
                    <OrderPay/>
                    <OrderDelivery data={data}/>
                    <div className={style.flex}>
                        <NavLink to="/howToBuy/payment" className={style.nav}>Условия оплаты</NavLink>
                        <NavLink to="/howToBuy/delivery" className={style.nav}>Условия доставки</NavLink>
                        <NavLink to="/howToBuy/guarantee" className={style.nav}>Гарантия на товар</NavLink>
                    </div>
                    <OrderProductItem product={props.product[0]}/>
                </div>
                <div className={style.sidebar}>
                    <BasketSidebar/>
                </div>
            </div>
            <Title arrow={true} title={"Продолжить покупки"} link="/catalog"/>
            <Product product={props.popular} slice={5}/>
        </>

    );
};

export default Order;