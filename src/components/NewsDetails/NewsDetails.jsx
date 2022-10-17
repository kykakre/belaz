import React from 'react';
import style from "./NewsDetails.module.scss"
import BreadcrumbNews from "../Breadcrumb/BreadcrumbNews.jsx";
import Title from "../Title/Title.jsx";
import NewsDetailItem from "./NewsDetailItem.jsx";
const NewsDetails = (props) => {
let item = props.news.map((e)=>(
    <NewsDetailItem id={e.id} key={e.id} title={e.title} text={e.text} data={e.data} photo={e.photo}/>
))

    return (
        <div className="content">
            <BreadcrumbNews/>
            <Title arrow={false} title="Новости"/>
            {item[0]}
        </div>
    );
};

export default NewsDetails;