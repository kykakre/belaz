import React, { useState } from "react";
import style from "./Modal.module.scss";
import { Registration } from "../../api/security";
const ModalRegistr = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [phone, setPhone] = useState("");

  const Reg = (email, password, name, surname, patronymic, phone) => {
    Registration(email, password, name, surname, patronymic, phone);
  };

  return (
    <div>
      <div className={style.title}>Регистрация</div>
      <div className={style.text}>
        Зарегистрируйтесь и начните совершать покупки
      </div>
      <form className={style.form}>
        <div className={style.input}>
          <input
            type="text"
            placeholder="Имя"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <input
            type="text"
            placeholder="Фамилия"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <input
            type="text"
            placeholder="Отчество"
            onChange={(e) => setPatronymic(e.target.value)}
            value={patronymic}
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <input
            type="text"
            placeholder="E-Mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <input
            type="text"
            placeholder="Телефон"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <input
            type="text"
            placeholder="Пароль"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className={style.inputItem}
          />
        </div>
        <button
          className={style.btn}
          onClick={(e) => {
            e.preventDefault();
            Reg(email, password, name, surname, patronymic, phone);
          }}
        >
          Зарегестрироваться
        </button>
      </form>
      <div className={style.linkModal} onClick={props.registrathion}>
        Уже есть аккаунт? Вход
      </div>
    </div>
  );
};
export default ModalRegistr;
