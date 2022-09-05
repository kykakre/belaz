import React from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbDiscount from "../components/Breadcrumb/BreadcrumbDiscount.jsx";
import ProductDiscount from "../components/Product/ProductDiscount.jsx";

const Discount = (props) => {
    return (
        <div className="content">
            <Search/>
            <BreadcrumbDiscount/>
            <ProductDiscount product={props.product}/>
            
        </div>
    );
};

export default Discount;