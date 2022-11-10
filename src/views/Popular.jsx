import React, {useEffect} from 'react';
import Search from "../components/Search/Search.jsx";
import ProductPopular from "../components/Product/ProductPopular.jsx";
import {GetPopularFiltered} from "../store/slice/popularSlice.js";

const Popular = (props) => {

    useEffect(() =>{

        props.GetPopulars(
            1,20
        );
        props.GetFilter()

    }, [])


    return (
        <div className="content">
            <Search/>
            <ProductPopular GetFilter={props.GetFilter} GetPopularFiltered={props.GetPopularFiltered} GetPopulars={props.GetPopulars} filter={props.filter} product={props.populars}/>

        </div>
    );
};

export default Popular;