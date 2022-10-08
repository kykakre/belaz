import React, {useState} from 'react';
import ProductItemLine from "../../Product/ProductItemLine.jsx";
import style from "../LkHistory/LkHistory.module.scss";
import {Select} from "antd";
import ProductItem from "../../Product/ProductItem.jsx";
import ProductSelectSort from "../../Product/ProductSelectSort.jsx";
import LineOrBlock from "../../LineOrBlock/LineOrBlock.jsx";

const LkFavorite = (props) => {
    const [line,setLine] = useState(false)
    let item = props.product.map((e)=>(
        <ProductItem id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price}/>
    ))
    let itemLine = props.product.map((e)=>(
        <ProductItemLine id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price} description={e.description} />
    ))
    return (
        <div className="block">
            <div className={style.flex}>
                <div className={style.title}>История просмотров</div>
                <div className={style.flexSort}>
                    <Select  defaultValue="new" className={style.select}>
                        <Option value="new">Новое</Option>
                        <Option value="favorite">Часто просматривалось</Option>
                    </Select>
                    <LineOrBlock line={line} setLine={setLine}/>
                </div>
            </div>
            <div className={style.cardFavorite}>
                {line?itemLine:item}
            </div>
        </div>
    );
};

export default LkFavorite;