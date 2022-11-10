import React, {useState} from 'react';
import ProductItem from "./ProductItem.jsx";
import style from "./Product.module.scss";
import ProductSelectSort from "./ProductSelectSort.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import ProductFilter from "./ProductFilter.jsx";
import TitleActual from "../Title/TitleActual.jsx";
import ProductItemLine from "./ProductItemLine.jsx";
import PaginationBlock from "../Pagination/PaginationBlock.jsx";
import {GetActualFiltered} from "../../store/slice/actualSlice.js";

const ProductActual = (props) => {
    const [line,setLine] = useState(false)
    const [current, setCurrent] = useState(1);


    let item = props.product.data?.map((e)=>(
        <ProductItem id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price}/>
    ))
    let itemLine = props.product.data?.map((e)=>(
        <ProductItemLine id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price} description={e.description} />
    ))
    return (
        <>
            <div className={style.flexBetween}>
               <TitleActual/>
                <div className={style.sortFlex}>
                    <ProductSelectSort/>
                    <LineOrBlock line={line} setLine={setLine}/>
                </div>
            </div>
            <div className="product">
                <div className="filter">
                    <ProductFilter current={current} setCurrent={setCurrent} Function={props.GetActualFiltered} filter={props.filter?.data} GetFilter={props.GetFilter}/>
                </div>
                <div className="cards">
                    {line?itemLine:item}
                    <PaginationBlock Function={props.GetActual}  current={current} setCurrent={setCurrent} total={props.product?.pageCount}/>
                </div>
            </div>


        </>
    );
};

export default ProductActual;