import React from 'react';
import style from "./Title.module.scss";
import {useParams} from "react-router-dom"
const TitleSearch = () => {
    let id = useParams()

    return (
        <div className={style.flex}>
            <div className={style.title}>Товар по запросу "{id?.id}"</div>
        </div>
    );
};

export default TitleSearch;