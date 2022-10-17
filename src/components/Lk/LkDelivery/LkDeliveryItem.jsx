import React from 'react';
import style from "./LkDelivery.module.scss";
import order from "../../../assets/order.svg"
const LkDeliveryItem = (props) => {
    return (
        <div className={style.order}>
            <div className={style.top}>
                <img src={order} alt="OrderIcon" className={style.orderItem}/>
                <div>
                    <div className={style.topText}>Номер заказа: {props.id}</div>
                    <div className={style.titleTop}>Статус: {props.statusDelivery}</div>
                    <div className={style.topText}>Дата доставки: {props.dateDelivery}</div>
                </div>
            </div>
            <div className={style.body}>
                <div className={style.product}>
                    <img src={props.img} alt="orderProduct" className={style.productImg}/>
                    <div>
                        <div className={style.productName}>{props.nameProduct}</div>
                        <div className={style.productPrise}>{props.productOrder} ₽</div>
                    </div>

                </div>
                <div className={style.orderBlock}>
                    <div className={style.text}>
                       <div> Дата оформления:</div>
                        <span>{props.dateRegistration}</span></div>
                    <div className={style.description}>При получении может потребоваться паспорт</div>
                    <div className={style.text}><div>Статус оплаты:</div><span className={style.color}>{props.paymentState}</span></div>
                    <div className={style.titleOrder}>
                        Способ получения
                    </div>
                    <div className={style.text}>
                        <div> Адрес доставки:</div>
                        <span>{props.addressDelivery}</span>
                    </div>
                    <div className={style.text}>
                        <div> Получатель:</div>
                        <span>{props.receiverName} {props.receiverSurname}</span>
                    </div>
                    <div className={style.text}>
                        <div> Номер получатель:</div>
                        <span>{props.phoneNumber}</span>
                    </div>
                    <div className={style.text}>
                        <div> Дата доставки:</div>
                        <span>{props.dateDelivery}</span>
                    </div>
                    <div className={style.text}>
                        <div> Служба доставки:</div>
                        <span>{props.deliveryService}</span>
                    </div>
                    <div className={style.flex}>
                        <div className={style.btn}>Чат с поддержкой</div>
                        <div className={style.btn}>Отменить заказ</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LkDeliveryItem;
