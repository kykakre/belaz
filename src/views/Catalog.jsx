import React from 'react';
import Search from "../components/Search/Search.jsx";
import Title from "../components/Title/Title.jsx";
import Product from "../components/Product/Product.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Category from "../components/Category/Category.jsx";

const Catalog = (props) => {

    return (
        <div className="content">

            <Title arrow={true} title={"Популярное"} link="/popular"/>
            <Product product={props.product} slice={10}/>
            <Title arrow={true} title={"Мы рекомендуем"} link="/recommend"/>
            <Product product={props.popular} slice={5}/>
            <Banner green={false} title={"Всегда пригодится"} subtitle={"Возьми с собой домкрат"}/>
            <Title arrow={true} title={"Скидки и акции"} link="/discount"/>
            <Product product={props.popular} slice={5}/>
            <Banner green={true} title={"Смотри в оба"} subtitle={'Главное - внимательность!'}/>
            <Title arrow={true} title={"Категории"} link="/category"/>
            <Category category={props.category}/>

        </div>
    );
};

export default Catalog;