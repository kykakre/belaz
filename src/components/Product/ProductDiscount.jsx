import React, {useState} from 'react';
import style from "./Product.module.scss"
import Title from "../Title/Title.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import ProductSelectSort from "./ProductSelectSort.jsx";
import ProductItem from "./ProductItem.jsx";
import ProductFilter from "./ProductFilter.jsx";
import TitleDiscount from "../Title/TitleDiscount.jsx";

const ProductDiscount = (props) => {
    const [line,setLine] = useState(false)
    let item = props.product.map((e)=>(
        <ProductItem id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price}/>
    ))
    return (
        <>
            <div className={style.flexBetween}>
            <TitleDiscount/>
            <div className={style.sortFlex}>
                <ProductSelectSort/>
                <LineOrBlock line={line} setLine={setLine}/>
            </div>
        </div>
            <div className="product">
                <div className="filter">
                    <ProductFilter/>
                </div>
                <div className="cards">
                    {item}
                </div>
            </div>


        </>
    );
};

export default ProductDiscount;