import React from 'react';
import {Select} from "antd";
import style from "./LkHistory.module.scss"
const { Option } = Select;
const LkHistory = (props) => {
    return (
        <div className="block">
            <div className={style.flex}>
                <div className="title">История просмотров</div>
                <Select  defaultValue="new" className={style.select}>
                    <Option value="new">Новое</Option>
                    <Option value="favorite">Часто просматривалось</Option>
                </Select>
            </div>
        </div>
    );
};

export default LkHistory;