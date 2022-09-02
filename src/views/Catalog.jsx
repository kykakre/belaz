import React from 'react';
import Search from "../components/Search/Search.jsx";
import Title from "../components/Title/Title.jsx";
import Product from "../components/Product/Product.jsx";
import Banner from "../components/Banner/Banner.jsx";

const Catalog = (props) => {

    return (
        <div className="content">
            <Search/>
            <Title arrow={true} title={"Популярное"}/>
            <Product product={props.product} slice={10}/>
            <Title arrow={true} title={"Мы рекомендуем"}/>
            <Product product={props.product} slice={5}/>
            <Banner green={true} title={"Смотри в оба"} subtitle={'Главное - внимательность!'}/>
            <Banner green={false} title={"Всегда пригодится"} subtitle={"Возьми с собой домкрат"}/>
        </div>
    );
};

export default Catalog;