import React, {useState} from 'react';
import style from "./Counter.module.scss"
const Counter = (props) => {



    return (
        <div className={style.flex}>
            <div  className={props.count <= 0 ? `${style.button}  ${style.none}`: `${style.button}`} onClick={()=>props.setCount(props.count-1)}>-</div>
            <div  className={style.input} >{props.count}</div>
            <div className={style.button } onClick={()=>props.setCount(props.count+1)}>+</div>
        </div>
    );
};

export default Counter;