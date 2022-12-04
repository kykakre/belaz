import React, { useState } from "react";
import { Pagination } from "antd";
import style from "./Pagination.module.scss";

const PaginationBlock = (props) => {
  const onChange = (page) => {
    props.setCurrent(page);
    window.scrollTo(0, 0);
  };
  return (
    <>
      {props.total === 0 ? (
        <></>
      ) : (
        <Pagination
          className={style.pagination}
          current={props.current}
          onChange={onChange}
          total={props.total}
        />
      )}
    </>
  );
};

export default PaginationBlock;
