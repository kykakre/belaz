import React from "react";
import style from "./AskMini.module.scss";
import ask from "../../assets/ask.png";
import { NavLink } from "react-router-dom";
const AskMini = (props) => {
  return (
    <div className={style.block}>
      <img className={style.img} alt="img" src={ask} />
      <div className={style.text}>
        Наши специалисты ответят на любой интересующий вопрос по услуге
      </div>
      <NavLink to="/contact" className={style.link}>
        Задать вопрос
      </NavLink>
    </div>
  );
};

export default AskMini;
