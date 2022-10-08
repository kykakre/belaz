import React from 'react';
import style from "./ContactsContent.module.scss"
import LinkMini from "../LinkMini/LinkMini.jsx";
import HowToBuyNews from "../HowToBuyContent/HowToBuyNews/HowToBuyNews.jsx";
import ContactsBlockInfo from "./ContactsBlock/ContactsBlockInfo.jsx";
import ContactsBlockForm from "./ContactsBlock/ContactsBlockForm.jsx";
import ContactsBlockAbout from "./ContactsBlock/ContactsBlockAbout.jsx";
const ContactsContent = (props) => {
    return (
        <div className={style.flex}>
            <div className={style.sidebar}>
                <LinkMini/>
                <HowToBuyNews news={props.news}/>
            </div>
            <div className={style.content}>
                <ContactsBlockInfo contacts={props.contacts}/>
                <ContactsBlockForm/>
                <ContactsBlockAbout/>
            </div>
        </div>
    );
};

export default ContactsContent;