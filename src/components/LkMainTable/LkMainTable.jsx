import React from 'react';
import style from "./LkMainTable.module.scss"
import LkMainTableBody from "./LkMainTableBody.jsx";
import {NavLink} from "react-router-dom";
const LkMainTable = (props) => {
    let order = props.order.map((e)=>(
        <LkMainTableBody id={e.id} key={e.id} nameProduct={e.nameProduct} productOrder={e.productOrder} dateDelivery={e.dateDelivery} statusDelivery={e.statusDelivery}/>
    ))

    return (
        <div className={style.block}>
            <div className={style.flex}>
                <div className={style.title}>{props.title}</div>
                <NavLink to="" className={style.link}>Подробнее</NavLink>
            </div>
            <table className={style.table}>
                <tr>
                    <th>Номер</th>
                    <th>Название товара</th>
                    <th>Кол-во</th>
                    <th>Цена</th>
                    <th>Дата</th>
                    <th>Статус</th>
                </tr>
                {order}

            </table>
        </div>

    );
};

export default LkMainTable;