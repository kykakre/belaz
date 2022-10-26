import React,{useState} from 'react';
import style from "./LkMainPromo.module.scss"
const LkMainPromo = (props) => {
    const [activeBtn,setActiveBtn] = useState("")

    return (
        <form className={style.block}>
            <div className={style.title}>Используйте промокод</div>
            <input className={style.input} onChange={(e)=>setActiveBtn(e.target.value)} placeholder="Введите промокод или сертификат"/>
            <button className={activeBtn !== ""? `${style.btn} ${style.btnActive}`: `${style.btn} `}>Применить</button>
        </form>
    );
};

export default LkMainPromo;