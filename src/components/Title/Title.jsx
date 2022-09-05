import React from 'react';
import style from "./Title.module.scss"
import arrow from "../../assets/titleArrow.svg"
import {NavLink} from "react-router-dom";
const Title = (props) => {
    return (
        <NavLink to={`${props.link}`} onClick={()=> window.scrollTo(0,0)}>
            <div className={style.flex}>
                <div className={style.title}>{props.title}</div>
                {props.arrow ?<img src={arrow}/>:<></>}
            </div>
        </NavLink>
    );
};

export default Title;