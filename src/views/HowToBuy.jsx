import React from 'react';
import Search from "../components/Search/Search.jsx";
import HowToBuyContent from "../components/HowToBuyContent/HowToBuyContent.jsx";
import BreadcrumbHowToBuy from "../components/Breadcrumb/BreadcrumbHowToBuy.jsx";

const HowToBuy = (props) => {
    return (
        <div className="content">
            <Search/>
            <BreadcrumbHowToBuy/>
            <HowToBuyContent news={props.news}/>
        </div>
    );
};

export default HowToBuy;