import React from 'react';
import style from "./HomeBunner.module.scss"
import {NavLink} from "react-router-dom";
import Search from "../Search/Search.jsx";
const HomeBunner = (props) => {
    return (
        <>
            <div className={style.content}>
                <Search/>

            </div>
            <div className={style.bunner}>
                <div className={style.bunnerContent}>
                    <div className={style.title}>АгрегатЕКБ</div>
                    <div className={style.subtitle}>Запчасти для грузовиков и спецтехники</div>
                    <div className={style.text}>«АгрегатЕКБ» — Интернет-магазин запчастей для легковых автомобилей, грузовиков и спецтехники. Компания
                        в настоящее время специализируется на оптовой продаже запасных частей к сельскохозяйственной, дорожной, строительной технике, легковым и грузовым автомобилям</div>
                    <NavLink to="/catalog" className={style.link}>Каталог<div className={style.arrow}/> </NavLink>

                </div>

            </div>
        </>

    );
};

export default HomeBunner;