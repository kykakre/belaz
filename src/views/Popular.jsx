import React, {useEffect} from 'react';
import Search from "../components/Search/Search.jsx";
import ProductPopular from "../components/Product/ProductPopular.jsx";

const Popular = (props) => {

    useEffect(() =>{

        props.GetPopulars(
            1,20
        );

    }, [])


    return (
        <div className="content">
            <Search/>
            <ProductPopular  GetPopulars={props.GetPopulars} product={props.populars}/>

        </div>
    );
};

export default Popular;