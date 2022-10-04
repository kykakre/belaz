import React from 'react';
import style from "./Title.module.scss";

const TitleActual = () => {
    return (
        <div className={style.flex}>
            <div className={style.title}>Актуальные</div>
        </div>
    );
};

export default TitleActual;