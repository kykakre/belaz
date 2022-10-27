import React from 'react';
import OrderItem from "./OrderItem.jsx"
import style from "./Order.module.scss"
import {Checkbox, Radio} from "antd";
const OrderDelivery = (props) => {

    let item = props.data.map((e)=>(
        <OrderItem id={e.id} key={e.id} icon={e.icon} text={e.text} description={e.description}/>
    ))

    return (
        <div className={style.card}>
            <div className={style.title}>Способ получения</div>
            <Radio.Group>
                {item}

            </Radio.Group>
        </div>
    );
};

export default OrderDelivery;