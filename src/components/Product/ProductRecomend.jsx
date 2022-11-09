import React, {useState} from 'react';
import ProductItem from "./ProductItem.jsx";
import BreadcrumbPopular from "../Breadcrumb/BreadcrumbPopular.jsx";
import style from "./Product.module.scss";
import TitlePopular from "../Title/TitlePopular.jsx";
import ProductSelectSort from "./ProductSelectSort.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import ProductFilter from "./ProductFilter.jsx";
import TitleRecomend from "../Title/TitleRecomend.jsx";
import ProductItemLine from "./ProductItemLine.jsx";
import PaginationBlock from "../Pagination/PaginationBlock.jsx";

const ProductRecomend = (props) => {
    const [line,setLine] = useState(false)
    let item = props.product?.data.map((e)=>(
        <ProductItem id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price}/>
    ))
    let itemLine = props.product?.data.map((e)=>(
        <ProductItemLine id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price} description={e.description} />
    ))
    return (
        <>
            <div className={style.flexBetween}>
                <TitleRecomend/>
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
                    <PaginationBlock Function={props.GetRecommends}  total={props.product?.pageCount}/>
                </div>
            </div>


        </>
    );
};

export default ProductRecomend;