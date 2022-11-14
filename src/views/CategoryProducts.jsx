import React from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbCategoryProduct from "../components/Breadcrumb/BreadcrumbCategoryProduct.jsx";

const CategoryProducts = (props) => {
    return (
        <div className="content">
            <Search/>
            <BreadcrumbCategoryProduct/>
            
        </div>
    );
};

export default CategoryProducts;