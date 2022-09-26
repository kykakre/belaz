import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../HowToBuyContent.module.scss"
import HowToBuyNewsItem from "./HowToBuyNewsItem.jsx";
const HowToBuyNews = (props) => {
    let news = props.news.map((e)=>(
        <HowToBuyNewsItem id={e.id} key={e.key} data={e.data} leed={e.leed}/>
    ))
    return (
        <div className={style.newsContainer}>
            <div className={style.flexTitle}>
                <div className={style.newsTitle}>Новости</div>
                <NavLink to="/news" className={style.newsLink}>Все новости</NavLink>
            </div>
            {news}

        </div>
    );
};

export default HowToBuyNews;