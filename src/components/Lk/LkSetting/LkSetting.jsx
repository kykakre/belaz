import React from "react";
import style from "./LkSetting.module.scss";
import { Input, DatePicker, ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/ru";
import locale from "antd/es/locale/ru_RU";
const LkSetting = () => {
  return (
    <div className="block">
      <div className={style.title}>Личные данные</div>
      <div className={style.inputContainer}>
        <div className={style.input}>
          <div className={style.inputName}>Имя</div>
          <Input className={style.inputItem} />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Фамилия</div>
          <Input className={style.inputItem} />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Отчество</div>
          <Input placeholder="Если есть" className={style.inputItem} />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Дата рождения</div>
          <ConfigProvider locale={locale}>
            <DatePicker
              className={style.inputItem}
              defaultValue={moment("01-01-2022", "DD-MM-YYYY")}
            />
          </ConfigProvider>
        </div>
      </div>
      <div className={style.title}>Контактные данные</div>
      <div className={style.inputContainer}>
        <div className={style.input}>
          <div className={style.inputName}>E-mail</div>
          <Input className={style.inputItem} />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Телефон</div>
          <Input className={style.inputItem} />
        </div>
      </div>
      <div className={style.title}>Адрес доставки</div>
      <div className={style.inputContainer}>
        <div className={style.input}>
          <div className={style.inputName}>Страна</div>
          <Input className={style.inputItem} />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Город</div>
          <Input className={style.inputItem} />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Населенный пункт</div>
          <Input placeholder="Если есть" className={style.inputItem} />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Индекс</div>
          <ConfigProvider locale={locale}>
            <DatePicker
              className={style.inputItem}
              defaultValue={moment("01-01-2022", "DD-MM-YYYY")}
            />
          </ConfigProvider>
        </div>
        <div className={style.inputFull}>
          <div className={style.inputName}>Адресс</div>
          <Input placeholder="Если есть" className={style.inputItem} />
        </div>
        <button className={style.btn}>Сохранить</button>
      </div>
    </div>
  );
};

export default LkSetting;
