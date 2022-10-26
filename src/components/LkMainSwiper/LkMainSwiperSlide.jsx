import React from 'react';
import style from "./LkMainSwiper.module.scss"
const LkMainSwiperSlide = (props) => {
    return (
        <div className={style.card}>
            <img src={props.img} alt="img" className={style.img}/>
            <div className={style.text}>{props.text}</div>
        </div>
    );
};

export default LkMainSwiperSlide;