import React from 'react';
import style from "./Title.module.scss";
import like from "../../assets/like.svg";
const TitleSearch = () => {
    return (
        <div className={style.flex}>
            <div className={style.title}>Товар по запросу</div>
        </div>
    );
};

export default TitleSearch;