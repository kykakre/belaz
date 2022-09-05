import React from 'react';
import {Select} from "antd"
import style from "./Product.module.scss"
const { Option } = Select;
const ProductSelectSort = (props) => {
    return (
        <div className={style.sortFlex}>
            <Select defaultValue="default" className={style.select}>
                <Option value="default">По популярности</Option>
            </Select>
            <Select defaultValue="default" className={style.select}>
                <Option value="default">По возрастанию</Option>
            </Select>
        </div>
    );
};

export default ProductSelectSort;