import React from 'react';
import style from "./NewsDetails.module.scss"
import ContactsMin from "../ContactsMini/ContactsMin.jsx";
import AskMini from "../AskMini/AskMini.jsx";
import LinkMini from "../LinkMini/LinkMini.jsx";
const NewsDetailItem = (props) => {
    const year = new Date(Date.parse(props.news.data.createdAt)).getFullYear();
    const mounth = new Date(Date.parse(props.news.data.createdAt)).getMonth();
    const day = new Date(Date.parse(props.news.data.createdAt)).getDay();

    return (
        <div className={style.container}>
            <div className={style.bunner}>
                <img src={"https://s.stats.cfd/" +props.news.data.img}  className={style.bannerImg}/>
                    <div className={style.bannerTitle}>{props.news.data.name}</div>
                    <div className={style.bannerdate}>{day}-{mounth}-{year}</div>
            </div>

            <div className={style.flex}>
                <div className={style.text}>{props.news.data.text}</div>
                <div className={style.sidebar}>
                    <ContactsMin/>
                    <AskMini/>
                    <LinkMini/>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailItem;