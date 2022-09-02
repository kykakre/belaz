import React from 'react';
import style from "./Banner.module.scss"
import greenBanner from "../../assets/greenBanner.png"
import blueBanner from "../../assets/blueBanner.png"
const Banner = (props) => {
    return (
        <div className={props.green?`${style.flexGreen}`:`${style.flexBlue}`}>
            <div>
                <div className={style.title}>{props.title}</div>
                <div className={style.subtitle}>{props.subtitle}</div>
            </div>
            <img className={style.bannerImg} src={props.green?`${greenBanner}`:`${blueBanner}`}/>
        </div>
    );
};

export default Banner;