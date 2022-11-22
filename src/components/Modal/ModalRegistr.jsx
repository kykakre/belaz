import React from "react";
import style from "./Modal.module.scss";
const ModalRegistr = (props) => {
  return (
    <div>
      <div className={style.title}>Регистрация</div>
      <div className={style.text}>
        Зарегистрируйтесь и начните совершать покупки
      </div>
      <form className={style.form}>
        <div className={style.input}>
          <input type="text" placeholder="Имя" className={style.inputItem} />
        </div>
        <div className={style.input}>
          <input
            type="text"
            placeholder="Фамилия"
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <input type="text" placeholder="E-Mail" className={style.inputItem} />
        </div>
        <div className={style.input}>
          <input
            type="text"
            placeholder="Телефон"
            className={style.inputItem}
          />
        </div>
        <button className={style.btn}>Зарегестрироваться</button>
      </form>
      <div className={style.linkModal} onClick={props.registrathion}>
        Уже есть аккаунт? Вход
      </div>
    </div>
  );
};
export default ModalRegistr;
