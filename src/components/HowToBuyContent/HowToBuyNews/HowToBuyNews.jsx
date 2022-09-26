import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./HowToBuyContent.module.scss"
const HowToBuyNews = (props) => {
    return (
        <div className={style.newsContainer}>
            <div className={style.flexTitle}>
                <div className={style.newsTitle}>Новости</div>
                <NavLink to="/news" className={style.newsLink}>Все новости</NavLink>
            </div>

        </div>
    );
};

export default HowToBuyNews;