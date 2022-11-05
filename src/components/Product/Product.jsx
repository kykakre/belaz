import React,{useEffect} from 'react';
import ProductItem from "./ProductItem.jsx";
import style from "./Product.module.scss";
const Product = (props) => {


    return (
        <div className={style.productContainer}>
            {props.products?.map((e)=>(
                <ProductItem id={e.id} key={e.id} title={e.title} special={e.special} img={e.img} rating={e.rating} totalGrabe={e.totalGrabe} price={e.price}/>
            ))}


        </div>
    );
};

export default Product;