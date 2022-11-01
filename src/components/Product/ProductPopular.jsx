import React, {useState} from 'react';
import ProductItem from "./ProductItem.jsx";
import style from "./Product.module.scss";
import Title from "../Title/Title.jsx";
import ProductSelectSort from "./ProductSelectSort.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import ProductFilter from "./ProductFilter.jsx";
import BreadcrumbPopular from "../Breadcrumb/BreadcrumbPopular.jsx";
import TitlePopular from "../Title/TitlePopular.jsx";
import ProductItemLine from "./ProductItemLine.jsx";

const ProductPopular = (props) => {
    const [line,setLine] = useState(false)
    props.GetPopulars()
    console.log(props.product)
    let item = props.product.map((e)=>(
        <ProductItem id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price}/>
    ))
    let itemLine = props.product.map((e)=>(
        <ProductItemLine id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price} description={e.description} />
    ))
    return (
        <>
            <BreadcrumbPopular/>
            <div className={style.flexBetween}>
                 <TitlePopular/>
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

export default ProductPopular;