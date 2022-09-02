import React from 'react';
import style from "./News.module.scss"
import back from "../../assets/newsBack.png"
const NewsForm = (props) => {
    return (
        <div className={style.block}>
            <img src={back} className={style.back}/>
            <form className={style.form}>
                <div className={style.title}>Подпишись на новости AgregatEKB</div>
                <div className={style.flex}>
                    <input className={style.input} placeholder="E-mail *"/>
                    <button className={style.button}>Подписаться</button>
                </div>
                <div className={style.example}>Например: info@agregatekb.ru</div>
                <div className={style.description}>Нажимая кнопку «Подписаться», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных <span>*</span></div>

            </form>

        </div>
    );
};

export default NewsForm;