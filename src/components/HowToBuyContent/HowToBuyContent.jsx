import React from 'react';
import style from "./HowToBuyContent.module.scss"
import HowToBuyNav from "./HowToBuyNav.jsx";
import HowToBuyNews from "./HowToBuyNews/HowToBuyNews.jsx";
import {Routes , Route} from "react-router-dom";
import HowToBuyContentNav from "./HowToBuyContentNav.jsx";
const HowToBuyContent = (props) => {
    return (
        <div className={style.flex}>
            <div className={style.nav}>
                <HowToBuyNav/>
                <HowToBuyNews news={props.news}/>
            </div>
            <div className={style.content}>
                <Routes>
                    <Route path="payment" element={<p>Оплата</p>}/>
                    <Route path="delivery" element={<p>Доставка</p>}/>
                    <Route path="guarantee" element={<p>Гарантия</p>}/>
                </Routes>
                <HowToBuyContentNav/>
            </div>
        </div>
    );
};

export default HowToBuyContent;