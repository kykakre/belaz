import React from 'react';
import style from "./NewsDetails.module.scss"
import ContactsMin from "../ContactsMini/ContactsMin.jsx";
import AskMini from "../AskMini/AskMini.jsx";
import LinkMini from "../LinkMini/LinkMini.jsx";
const NewsDetailItem = (props) => {
    return (
        <div className={style.container}>
            <div className={style.bunner}>
                <img src={props.photo}  className={style.bannerImg}/>
                    <div className={style.bannerTitle}>{props.title}</div>
                    <div className={style.bannerdate}>{props.data}</div>
            </div>

            <div className={style.flex}>
                <div className={style.text}>{props.text}</div>
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