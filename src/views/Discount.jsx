import React, {useEffect} from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbDiscount from "../components/Breadcrumb/BreadcrumbDiscount.jsx";
import ProductDiscount from "../components/Product/ProductDiscount.jsx";

const Discount = (props) => {



    useEffect(() =>{

        props.GetAvailables(
            1,20
        );

    }, [])

    return (
        <div className="content">
            <Search/>
            <BreadcrumbDiscount/>
            <ProductDiscount availables={props.availables}/>
            
        </div>
    );
};

export default Discount;