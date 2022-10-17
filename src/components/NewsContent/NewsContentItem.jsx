import React from 'react';
import style from "./NewsContent.module.scss"
import share from "../../assets/share.svg"
import {NavLink} from "react-router-dom";
const NewsContentItem = (props) => {
    return (
        <div className={style.card}>
            <img className={style.img} alt="newsPhoto" src={props.photo}/>
            <div>
                <div className={style.titleNews}>{props.title}</div>
                <div className={style.date}>{props.data}</div>
                <div className={style.leed}>{props.leed}</div>
                <div className={style.moreFlex}>
                    <div className={style.share}>
                        <img src={share}  alt="share"/>
                    </div>
                    <NavLink to={'/news/' + props.id} className={style.more}> Читать далее</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NewsContentItem;