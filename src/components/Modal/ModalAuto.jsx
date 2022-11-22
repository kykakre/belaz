import React, { useState } from "react";
import style from "./Modal.module.scss";
import logo from "../../assets/logoModal.svg";
import ModalItem from "./ModalItem";
import { Autorize } from "../../api/security.js";
const ModalAuto = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Auto = (email, password) => {
    Autorize(email, password);
  };

  return (
    <div>
      <img src={logo} className={style.logo} />
      <div className={style.title}>Введите логин и пароль</div>
      <div className={style.text}>
        Или зарегестрируйтесь, если Вы здесь впервые
      </div>
      <form className={style.form}>
        <div className={style.input}>
          <div className={style.inputText}>E-mail или логин</div>
          <input
            type="text"
            placeholder="info@agregatekb.ru"
            className={style.inputItem}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={style.input}>
          <div className={style.inputText}>Телефон или пароль</div>
          <input
            type="text"
            placeholder="8123839902"
            className={style.inputItem}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          className={style.btn}
          onClick={(e) => {
            e.preventDefault();
            Auto(email, password);
            console.log(email, password);
            console.log("gag");
          }}
        >
          Войти
        </button>
      </form>
      <div className={style.linkModal} onClick={props.autorize}>
        Нет аккаунта? Зарегистрироваться
      </div>
    </div>
  );
};
export default ModalAuto;
