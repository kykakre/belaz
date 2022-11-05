import React, {useState} from 'react';
import style from "./Product.module.scss"
import Title from "../Title/Title.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import ProductSelectSort from "./ProductSelectSort.jsx";
import ProductItem from "./ProductItem.jsx";
import ProductFilter from "./ProductFilter.jsx";
import TitleDiscount from "../Title/TitleDiscount.jsx";
import ProductItemLine from "./ProductItemLine.jsx";

const ProductDiscount = (props) => {


    const [line,setLine] = useState(false)

    console.log(props.availebles)
    let item = props.availables?.map((e)=>(
        <ProductItem id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price}/>
    ))
    let itemLine = props.availables?.map((e)=>(
        <ProductItemLine id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price} description={e.description} />
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
                    {line?itemLine:item}
                </div>
            </div>


        </>
    );
};

export default ProductDiscount;