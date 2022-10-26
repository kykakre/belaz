import React from 'react';
import style from "./LkMainBunner.module.scss"
const LkMainBunner = (props) => {
    return (
        <div className={style.bunner}>
            <div className={style.title}>{props.title}</div>
            <div className={style.subtitle}>{props.subtitle}</div>
        </div>
    );
};

export default LkMainBunner;