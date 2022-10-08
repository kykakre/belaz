import React from 'react';
import {Select} from "antd";
import style from "./LkHistory.module.scss"
import ProductItemLine from "../../Product/ProductItemLine.jsx";
const { Option } = Select;
const LkHistory = (props) => {
    let item = props.product.map((e)=>(
        <ProductItemLine id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price} description={e.description} />

    ))
    return (
        <div className="block">
            <div className={style.flex}>
                <div className={style.title}>История просмотров</div>
                <Select  defaultValue="new" className={style.select}>
                    <Option value="new">Новое</Option>
                    <Option value="favorite">Часто просматривалось</Option>
                </Select>
            </div>
            <div className={style.card}>
                {item}
            </div>
        </div>
    );
};

export default LkHistory;