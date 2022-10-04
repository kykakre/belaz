import React from 'react';
import style from "./Title.module.scss";
import like from "../../assets/like.svg";

const TitleRecomend = () => {
    return (
        <div className={style.flex}>
            <div className={style.title}>Мы рекомендуем</div>
            <img src={like}/>
        </div>
    );
};

export default TitleRecomend;