import React from 'react';
import style from "./Title.module.scss"
import arrow from "../../assets/titleArrow.svg"
const Title = (props) => {
    return (
        <div className={style.flex}>
            <div className={style.title}>{props.title}</div>
            {props.arrow ?<img src={arrow}/>:<></>}
        </div>
    );
};

export default Title;