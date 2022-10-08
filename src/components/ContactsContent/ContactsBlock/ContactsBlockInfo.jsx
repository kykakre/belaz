import React from 'react';
import ContactsBlockInfoItem from "./ContactsBlockInfoItem.jsx";
import style from "./ContactsBlock.module.scss"
const ContactsBlockInfo = (props) => {
    let item = props.contacts.map((e)=>(
        <ContactsBlockInfoItem id={e.id} key={e.id} icon={e.icon} title={e.title} text={e.text}/>
    ))
    return (
        <div className={style.block}>
            {item}
        </div>
    );
};

export default ContactsBlockInfo;