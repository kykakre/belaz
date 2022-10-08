import React from 'react';
import style from "./LinkMini.module.scss"
import {NavLink} from "react-router-dom";
import arrow from "../../assets/arrowBanner.svg";

const LinkMini = (props) => {
    return (
        <div className={style.block}>
            <NavLink onClick={()=> window.scrollTo(0,0)} to="/howToBuy" className={style.link}>
                <div className={style.text}>Помощь</div>
                <img src={arrow} className={style.icon}/>
            </NavLink>
            <NavLink onClick={()=> window.scrollTo(0,0)} to="/howToBuy/payment" className={style.link}>
                <div className={style.text}>Условия оплаты</div>
                <img src={arrow} className={style.icon}/>
            </NavLink>
            <NavLink onClick={()=> window.scrollTo(0,0)} to="/howToBuy/delivery" className={style.link}>
                <div className={style.text}>Условия доставки</div>
                <img src={arrow} className={style.icon}/>
            </NavLink>
            <NavLink onClick={()=> window.scrollTo(0,0)} to="/howToBuy/guarantee" className={style.link}>
                <div className={style.text}>Гарантия на товар</div>
                <img src={arrow} className={style.icon}/>
            </NavLink>
        </div>
    );
};

export default LinkMini;