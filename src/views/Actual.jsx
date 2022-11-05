import React, {useEffect} from 'react';
import Search from "../components/Search/Search.jsx";
import ProductActual from "../components/Product/ProductActual.jsx";
import BreadcrumbActual from "../components/Breadcrumb/BreadcrumbActual.jsx";

const Actual = (props) => {

    useEffect(() =>{

        props.GetActual(
            1,20
        );

    }, [])

    return (
        <div className="content">
            <Search/>
            <BreadcrumbActual/>
            <ProductActual product={props.actual}/>

        </div>
    );
};

export default Actual;