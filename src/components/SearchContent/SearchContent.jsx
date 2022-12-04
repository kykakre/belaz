import React, {useEffect, useState} from 'react';
import ProductItem from "../Product/ProductItem.jsx";
import ProductItemLine from "../Product/ProductItemLine.jsx";
import style from "../Product/Product.module.scss";
import TitleRecomend from "../Title/TitleRecomend.jsx";
import ProductSelectSort from "../Product/ProductSelectSort.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import ProductFilter from "../Product/ProductFilter.jsx";
import PaginationBlock from "../Pagination/PaginationBlock.jsx";
import TitleSearch from "../Title/TitleSearch.jsx";
import {useParams} from "react-router-dom";

const SearchContent = (props) => {
    let  id  = useParams();


    const [line,setLine] = useState(false)
    const [current, setCurrent] = useState(1);
    useEffect(() => {
        props.GetSearch(current, 20,id.id);
    }, [current]);
    let item = props.product?.data?.map((e)=>(
        <ProductItem id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price}/>
    ))
    let itemLine = props.product?.data?.map((e)=>(
        <ProductItemLine id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price} description={e.description} />
    ))
    return (
        <>
            <div className={style.flexBetween}>
                <TitleSearch/>
                <div className={style.sortFlex}>
                    <ProductSelectSort/>
                    <LineOrBlock line={line} setLine={setLine}/>
                </div>
            </div>
            <div className="product">

                <div className="cards">
                    {line?itemLine:item}
                    <PaginationBlock Function={props.GetSearch} current={current} setCurrent={setCurrent}  total={props.product?.pageCount}/>
                </div>
            </div>


        </>
    );
};

export default SearchContent;