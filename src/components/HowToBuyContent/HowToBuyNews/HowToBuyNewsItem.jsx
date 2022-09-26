import React from 'react';
import style from "./HowToBuyNews.module.scss"
const HowToBuyNewsItem = (props) => {
    return (
        <div className={style.card}>
            <div className={style.data}>{props.data}</div>
            <div className={style.leed}>{props.leed}</div>
        </div>
    );
};

export default HowToBuyNewsItem;