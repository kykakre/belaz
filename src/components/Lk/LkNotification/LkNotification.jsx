import React from 'react';
import { Switch } from 'antd';
import style from "./LkNotification.module.scss"
const LkNotification = (props) => {
    return (
        <div className="block">
            <div className={style.title}>Уведомления</div>
            <div className={style.item}>
                <div className={style.subtitle}>Статус заказа</div>
                <div className={style.switchItem}>
                    <Switch className={style.switch}/>
                    <div className={style.text}>Получать уведомления о статусе заказа по электронной почте</div>
                </div>
                <div className={style.switchItem}>
                    <Switch className={style.switch}/>
                    <div className={style.text}>Получать уведомления о статусе заказа по SMS на телефон</div>
                </div>
            </div>
            <div className={style.item}>
                <div className={style.subtitle}>Прочее</div>
                <div className={style.switchItem}>
                    <Switch className={style.switch}/>
                    <div className={style.text}>Поступление новых товаров</div>
                </div>
                <div className={style.switchItem}>
                    <Switch className={style.switch}/>
                    <div className={style.text}>Промоакции и скидки</div>
                </div>
                <div className={style.switchItem}>
                    <Switch className={style.switch}/>
                    <div className={style.text}>Распродажи</div>
                </div>
                <div className={style.switchItem}>
                    <Switch className={style.switch}/>
                    <div className={style.text}>Товар из списка избранных продаётся со скидкой</div>
                </div>
                <div className={style.switchItem}>
                    <Switch className={style.switch}/>
                    <div className={style.text}>Актуальные новости БелАК</div>
                </div>
            </div>
            <div className={style.item}>
                <div className={style.subtitle}>Безопасность</div>
                <div className={style.switchItem}>
                    <Switch className={style.switch}/>
                    <div className={style.text}>Уведомлять о подозрительном входе по SMS</div>
                </div>
                <div className={style.switchItem}>
                    <Switch className={style.switch}/>
                    <div className={style.text}>Уведомлять о подозрительном входе по E-mail</div>
                </div>
            </div>
        </div>
    );
};

export default LkNotification;