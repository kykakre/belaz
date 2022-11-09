import React,{useState} from 'react';
import {Pagination} from "antd";
import style from "./Pagination.module.scss"

const PaginationBlock = (props) => {


    const onChange = (page) => {
        console.log(page);
        props.setCurrent(page);

        props.Function(
            page , 20
        )
        window.scrollTo(0,0)
    };

    return (
        <Pagination className={style.pagination} current={props.current} onChange={onChange} total={props.total} />
    );
};

export default PaginationBlock;