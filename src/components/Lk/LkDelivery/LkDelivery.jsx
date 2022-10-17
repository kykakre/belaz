import React from 'react';
import LkDeliveryItem from "./LkDeliveryItem.jsx";
import style from "./LkDelivery.module.scss"
const LkDelivery = (props) => {
    let item = props.order.map((e)=>(
        <LkDeliveryItem id={e.id} key={e.key} statusDelivery={e.statusDelivery} dateDelivery={e.dateDelivery} img={e.img} nameProduct={e.nameProduct}
                        productOrder={e.productOrder} dateRegistration={e.dateRegistration} paymentState={e.paymentState} address={e.address}
                        receiverName={e.receiverName} receiverSurname={e.receiverSurname} phoneNumber={e.phoneNumber} addressDelivery={e.addressDelivery}
                        deliveryService={e.deliveryService}
        />
    ))
    return (
        <div className="block">
            <div className={style.title}>Мои заказы</div>
            {item}
        </div>
    );
};

export default LkDelivery;













