import React, {useEffect} from 'react';
import Search from "../components/Search/Search.jsx";
import ProductActual from "../components/Product/ProductActual.jsx";
import BreadcrumbActual from "../components/Breadcrumb/BreadcrumbActual.jsx";
import {GetAvailablesFiltered} from "../store/slice/availableSlice.js";
import {GetActualFiltered} from "../store/slice/actualSlice.js";

const Actual = (props) => {

    useEffect(() =>{

        props.GetActual(
            1,20
        );
        props.GetFilter()

    }, [])

    return (
        <div className="content">
            <Search/>
            <BreadcrumbActual/>
            <ProductActual GetFilter={props.GetFilter} GetActualFiltered={props.GetActualFiltered} GetActual={props.GetActual} filter={props.filter} product={props.actual}/>

        </div>
    );
};

export default Actual;