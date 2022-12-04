import React, {useEffect} from 'react';
import Preloader from "../components/Preloader/Preloader";
import SearchContent from "../components/SearchContent/SearchContent.jsx";
import {useParams, useLocation} from "react-router-dom";
import Search from "../components/Search/Search.jsx"

const SearchView = (props) => {
    let  id  = useParams();
    useEffect(() => {
        props.GetSearch(1, 20,id.id);
    }, []);
    return (
        <div className="content">
            {props.searchLoader?<Preloader/>:""}
            <Search GetSearch={props.GetSearch}/>
            <SearchContent
                GetSearch={props.GetSearch}
                product={props.search}
                filter={props.filter}
                GetFilter={props.GetFilter}
            />



        </div>
    );
};

export default SearchView;