import React, { useState } from "react";
import style from "./ContactsBlock.module.scss";
import { Checkbox } from "antd";
import gear from "../../../assets/gear.svg";
const ContactsBlockForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(false);

  return (
    <div className={style.block}>
      <div className={style.formTitle}>Обратная связь</div>
      <form className={style.form}>
        <img src={gear} className={style.gear} />
        <input
          placeholder="Имя"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          className={style.input}
        />
        <input
          placeholder="Телефон"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
          className={style.input}
        />
        <input
          placeholder="E-mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          className={style.input}
        />
        <textarea
          placeholder="Сообщение"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          className={style.textarea}
        />
        <div className={style.checkbox}>
          <Checkbox
            className={style.checkboxItem}
            checked={check}
            onClick={() => setCheck(!check)}
          />
          <div className={style.checkboxText}>
            Я согласен с <a>политикой обработки персональных данных</a>
          </div>
        </div>
        <div className={style.button}>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.PostFeedbackFunc(name, phone, email, message);
              setName("");
              setPhone("");
              setEmail("");
              setMessage("");
            }}
            className={
              check ? style.btn : `${style.buttonNoActive} ${style.btn}`
            }
          >
            Отправить
          </button>
          <div
            onClick={(e) => {
              setName("");
              setPhone("");
              setEmail("");
              setMessage("");
            }}
            className={style.btnClear}
          >
            Очистить
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactsBlockForm;
