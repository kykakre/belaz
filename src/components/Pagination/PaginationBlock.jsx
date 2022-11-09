import React,{useState} from 'react';
import {Pagination} from "antd";
import style from "./Pagination.module.scss"

const PaginationBlock = (props) => {

    const [current, setCurrent] = useState(1);

    const onChange = (page) => {
        console.log(page);
        setCurrent(page);

        props.Function(
            page , 20
        )
        window.scrollTo(0,0)
    };

    return (
        <Pagination className={style.pagination} current={current} onChange={onChange} total={props.total} />
    );
};

export default PaginationBlock;