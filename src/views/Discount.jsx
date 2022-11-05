import React, {useEffect} from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbDiscount from "../components/Breadcrumb/BreadcrumbDiscount.jsx";
import ProductDiscount from "../components/Product/ProductDiscount.jsx";

const Discount = (props) => {


    debugger

    useEffect(() =>{

        props.GetAvailables(
            1,20
        );

    }, [props.availebles])

    return (
        <div className="content">
            <Search/>
            <BreadcrumbDiscount/>
            <ProductDiscount availebles={props.availebles}/>
            
        </div>
    );
};

export default Discount;