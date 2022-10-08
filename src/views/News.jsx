import React from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbNews from "../components/Breadcrumb/BreadcrumbNews.jsx";
import NewsContent from "../components/NewsContent/NewsContent.jsx";

const News = (props) => {
    return (
        <div className="content">
            <Search/>
            <BreadcrumbNews/>
            <NewsContent news={props.news}/>
        </div>
    );
};

export default News;