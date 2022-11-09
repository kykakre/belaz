import React from 'react';
import style from "./NewsDetails.module.scss"
import BreadcrumbNews from "../Breadcrumb/BreadcrumbNews.jsx";
import Title from "../Title/Title.jsx";
import NewsDetailItem from "./NewsDetailItem.jsx";
const NewsDetails = (props) => {



    return (
        <div className="content">
            <BreadcrumbNews/>
            <Title arrow={false} title="Новости"/>
            <NewsDetailItem news={props.news}/>

        </div>
    );
};

export default NewsDetails;