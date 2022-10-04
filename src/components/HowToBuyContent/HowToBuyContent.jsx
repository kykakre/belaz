import React from 'react';
import style from "./HowToBuyContent.module.scss"
import HowToBuyNav from "./HowToBuyNav.jsx";
import HowToBuyNews from "./HowToBuyNews/HowToBuyNews.jsx";
import {Routes , Route} from "react-router-dom";
import HowToBuyContentNav from "./HowToBuyContentNav.jsx";
import HowToBuy from "./HowToBuyPage/HowToBuy.jsx";
import HowToBuyPage from "./HowToBuyPage/HowToBuyPage.jsx";
import HowToDelivery from "./HowToBuyPage/HowToDelivery.jsx";
import HowToGuarantee from "./HowToBuyPage/HowToGuarantee.jsx";
const HowToBuyContent = (props) => {
    return (
        <div className={style.flex}>
            <div className={style.nav}>
                <HowToBuyNav/>
                <HowToBuyNews news={props.news}/>
            </div>
            <div className={style.content}>
                <Routes>
                    <Route path="" element={<HowToBuy helpsAll={props.helps.all}/>}/>
                    <Route path="payment" element={<HowToBuyPage helpsBuy={props.helps.buy}/>}/>
                    <Route path="delivery" element={<HowToDelivery helpsDelivery={props.helps.delivery}/>}/>
                    <Route path="guarantee" element={<HowToGuarantee helpsGuarantee={props.helps.guarantee}/>}/>
                </Routes>
                <HowToBuyContentNav/>
            </div>
        </div>
    );
};

export default HowToBuyContent;