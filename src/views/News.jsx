import React from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbNews from "../components/Breadcrumb/BreadcrumbNews.jsx";
import NewsContent from "../components/NewsContent/NewsContent.jsx";
import {GetNewsAll} from "../store/slice/newsSlice.js";

const News = (props) => {
    return (
        <div className="content">
            <Search/>
            <BreadcrumbNews/>
            <NewsContent GetNewsAll={props.GetNewsAll} news={props.news}/>
        </div>
    );
};

export default News;