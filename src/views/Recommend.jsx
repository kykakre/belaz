import React, {useEffect} from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbRecomendate from "../components/Breadcrumb/BreadcrumbRecomendate.jsx";
import ProductRecomend from "../components/Product/ProductRecomend.jsx";

const Recommend = (props) => {

    useEffect(() =>{

        props.GetRecommends(
            1,20
        );

    }, [])

    return (
        <div className="content">
            <Search/>
            <BreadcrumbRecomendate/>
            <ProductRecomend GetRecommends={props.GetRecommends} product={props.recommend}/>

        </div>
    );
};

export default Recommend;