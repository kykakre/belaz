import React from 'react';
import style from "./ContactsBlock.module.scss"
import {Checkbox} from "antd";
import gear from "../../../assets/gear.svg"
const ContactsBlockForm = (props) => {
    return (
        <div className={style.block}>
            <div className={style.formTitle}>Обратная связь</div>
            <form className={style.form}>
                <img src={gear} className={style.gear}/>
                <input placeholder="Имя" className={style.input}/>
                <input placeholder="Телефон" className={style.input}/>
                <input placeholder="E-mail" className={style.input}/>
                <textarea placeholder="Сообщение" className={style.textarea}/>
                <div className={style.checkbox}>
                    <Checkbox className={style.checkboxItem}/>
                    <div className={style.checkboxText}>Я согласен с <a>политикой обработки персональных данных</a></div>
                </div>
                <div className={style.button}>
                    <button className={style.btn}>Отправить</button>
                    <button className={style.btnClear}>Очистить</button>
                </div>
            </form>
        </div>
    );
};

export default ContactsBlockForm;