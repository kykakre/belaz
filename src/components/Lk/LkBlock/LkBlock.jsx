import React from 'react';
import style from "./LkBlock.module.scss"
import LkBlockPersonInfo from "./LkBlockPersonInfo.jsx";
import LkBlockSetting from "./LkBlockSetting.jsx";
import LkBlockOrder from "./LkBlockOrder.jsx";
import LkBlockOther from "./LkBlockOther.jsx";
const LkBlock = (props) => {
    return (
        <div className={style.block}>
            <LkBlockPersonInfo personInfo={props.personInfo}/>
            <LkBlockSetting/>
            <LkBlockOrder/>
            <LkBlockOther/>
        </div>
    );
};

export default LkBlock;