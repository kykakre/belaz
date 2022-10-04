import React from 'react';
import style from "./HowToBuy.module.scss"
const HowToBuyItem = (props) => {
    return (
        <div className={style.item}>
            <h1 >{props.title}</h1>
            <p >{props.text}</p>

        </div>
    );
};

export default HowToBuyItem;