import React,{useState} from 'react';
import {Pagination} from "antd";
import style from "./Pagination.module.scss"
const Pagination = (props) => {
    const [current, setCurrent] = useState(1);

    const onChange = (page) => {
        setCurrent(page);
    };

    return (
        <Pagination className={style.pagination} current={current} onChange={onChange} total={props.total} />
    );
};

export default Pagination;