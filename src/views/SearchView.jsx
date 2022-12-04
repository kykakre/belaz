import React, {useEffect} from 'react';
import Preloader from "../components/Preloader/Preloader";
import SearchContent from "../components/SearchContent/SearchContent.jsx";
import {useParams} from "react-router-dom";
import Search from "../components/Search/Search.jsx"

const Search = (props) => {
    const id = useParams();
    useEffect(() => {
        props.GetSearch(1, 20,id.id);
    }, []);
    return (
        <div className="content">
            {props.searchLoader?<Preloader/>:""}
            <Search />



        </div>
    );
};

export default Search;