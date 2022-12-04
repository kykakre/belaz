import React, {useEffect} from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbCategory from "../components/Breadcrumb/BreadcrumbCategory.jsx";
import CategoryAll from "../components/Category/CategoryAll.jsx";
import Title from "../components/Title/Title.jsx";
import Product from "../components/Product/Product.jsx";
import Preloader from '../components/Preloader/Preloader.jsx';
import {GetSearch} from "../store/slice/searcSlice.js";

const Category = (props) => {

    useEffect(() =>{

        props.GetCategory(
             1,20
            )
        props.GetRecommends(
            1,5
        )


    }, [])

    console.log(props.recommend)
    return (
        <div className="content">
            {props.categoryLoader? <Preloader/>:""}
            <Search GetSearch={props.GetSearch}/>
            <BreadcrumbCategory/>
            <CategoryAll category={props.category}/>
            <Title title={"Мы рекомендуем"} arrow={true} link="/recommend"/>
            <Product  products={props.recommend}/>
        </div>
    );
};

export default Category;