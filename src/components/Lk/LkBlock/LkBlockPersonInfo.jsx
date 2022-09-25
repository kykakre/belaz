import React from 'react';
import style from "./LkBlock.module.scss"
const LkBlockPersonInfo = (props) => {

    return (
        <div className={style.personBlock}>
            <img src={props.personInfo.avatar} className={style.personAvatar} alt="avatar"/>
            <div className={style.personInfo}>
                <div className={style.personText}>{props.personInfo.name}</div>
                <div className={style.personText}>{props.personInfo.surname}</div>
            </div>
        </div>
    );
};

export default LkBlockPersonInfo;