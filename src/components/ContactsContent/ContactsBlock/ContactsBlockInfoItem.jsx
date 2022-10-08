import React from 'react';
import style from "./ContactsBlock.module.scss"
const ContactsBlockInfoItem = (props) => {
    return (
        <div className={style.item}>
            <img alt="icon" className={style.icon} src={props.icon}/>
            <div>
                <div className={style.title}>{props.title}</div>
                <div className={style.text}>{props.text}</div>
            </div>
        </div>
    );
};

export default ContactsBlockInfoItem;