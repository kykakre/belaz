import React from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbCategoryProduct from "../components/Breadcrumb/BreadcrumbCategoryProduct.jsx";
import {GetSearch} from "../store/slice/searcSlice.js";

const CategoryProducts = (props) => {
    return (
        <div className="content">
            <Search GetSearch={props.GetSearch}/>
            <BreadcrumbCategoryProduct/>
            
        </div>
    );
};

export default CategoryProducts;