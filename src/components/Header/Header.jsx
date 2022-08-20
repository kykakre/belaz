import React from "react";
import style from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import Nav from "../Nav/Nav.jsx";
import NavUnder from "../Nav/NavUnder.jsx";
const Header = (props) => {
  return (
    <>
      <div className={style.header}>
        <div className={style.headerContainer}>
          <img src={logo} alt="logo" className={style.logo} />
          <Nav />
        </div>
      </div>
      <div className={style.headerUnder}>
      <NavUnder/>
      </div>
    </>
  );
};

export default Header;
