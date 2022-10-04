import React from 'react';
import Search from "../components/Search/Search.jsx";
import ProductActual from "../components/Product/ProductActual.jsx";
import BreadcrumbActual from "../components/Breadcrumb/BreadcrumbActual.jsx";

const Actual = (props) => {
    return (
        <div className="content">
            <Search/>
            <BreadcrumbActual/>
            <ProductActual product={props.product}/>

        </div>
    );
};

export default Actual;