import React from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbRecomendate from "../components/Breadcrumb/BreadcrumbRecomendate.jsx";
import ProductRecomend from "../components/Product/ProductRecomend.jsx";

const Recommend = (props) => {
    return (
        <div className="content">
            <Search/>
            <BreadcrumbRecomendate/>
            <ProductRecomend product={props.product}/>

        </div>
    );
};

export default Recommend;