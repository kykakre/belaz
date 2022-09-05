import React from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbCategory from "../components/Breadcrumb/BreadcrumbCategory.jsx";
import CategoryAll from "../components/Category/CategoryAll.jsx";
import Title from "../components/Title/Title.jsx";
import Product from "../components/Product/Product.jsx";
const Category = (props) => {
    return (
        <div className="content">
            <Search/>
            <BreadcrumbCategory/>
            <CategoryAll category={props.category} product={props.product}/>
            <Title title={"Мы рекомендуем"} arrow={true} link="/recommend"/>
            <Product slice={5} product={props.product}/>
        </div>
    );
};

export default Category;