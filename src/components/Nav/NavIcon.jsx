import React from "react";
import Favorite from "./Icons/Favorite";
import style from "./Nav.module.scss";
import { Avatar, Badge } from "antd";
import Basket from "./Icons/Basket";
import { NavLink } from "react-router-dom";

export default function Icon(props) {
  return (
    <>
      <NavLink to="lk/favorite" className={style.iconItem}>
        <Badge count={0}>
          <Avatar shape="square" icon={<Favorite />} />
        </Badge>
      </NavLink>
      <NavLink to="basket" className={style.iconItem}>
        <Badge count={1}>
          <Avatar shape="square" icon={<Basket />} />
        </Badge>
      </NavLink>
    </>
  );
}
