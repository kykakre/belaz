import React from 'react';
import style from "./ContactsMini.module.scss"
const ContactsMin = (props) => {
    return (
        <div className={style.block}>
            <a href="tel:+73432875732" className={style.link}>+7 (343) 287-57-32</a>
            <a href="mailto:info@agregatekb.ru" className={style.link}>info@agregatekb.ru</a>
            <div className={style.text}>Интернет-магазин запчастей
                для легковых автомобилей, грузовиков и спецтехники</div>
        </div>
    );
};

export default ContactsMin;