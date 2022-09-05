import React from 'react';
import style from "../Category/Category.module.scss"
import stroke from "../../assets/stroke.svg"
import bloke from "../../assets/bloke.svg"
const CategorySort = (props) => {
    return (
        <div className={style.flex}>
            <img src={stroke} onClick={()=>props.setLine(true)} className={props.line? `${style.icon} `: `${style.icon} ${style.noActive}`}/>
            <img src={bloke} onClick={()=>props.setLine(false)} className={props.line? `${style.icon} ${style.noActive}`: `${style.icon} `}/>
        </div>
    );
};

export default CategorySort;