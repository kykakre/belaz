import React from 'react';
import ProductItem from "./ProductItem.jsx";
import style from "./Product.module.scss";
const Product = (props) => {

    let productItem = props.product.slice(0, props.slice ).map((e)=>(

        <ProductItem id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} grabe={e.grabe} totalGrabe={e.totalGrabe} price={e.price}/>
    ))
    return (
        <div className={style.productContainer}>
            {productItem}
        </div>
    );
};

export default Product;