import React from 'react';
import style from "./Order.module.scss"
import { Radio} from "antd";
const OrderItem = (props) => {
    return (
        <div className={style.itemDelivery}>
            <Radio value={props.id} className={style.checkboxDelivery}/>
            <img src={props.icon} className={style.iconDelivery}/>
            <div>
                <div className={style.deliveryText}>{props.text}</div>
                <div className={style.deliveryDescription}>{props.description}</div>
            </div>
        </div>
    );
};

export default OrderItem;