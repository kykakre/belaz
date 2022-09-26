import React from 'react';
import style from "./HowToBuyContent.module.scss"
import {NavLink} from "react-router-dom";
const HowToBuyNav = () => {
    return (
        <div>
            <div className={style.title}>Помощь</div>
            <div className={style.navBlock}>
                <NavLink to="payment" className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link} `
                } >Условия оплаты</NavLink>
                <NavLink to="delivery" className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link} `
                }>Условия доставки</NavLink>
                <NavLink to="guarantee" className={({ isActive }) =>
                    isActive ? `${style.link} ${style.active}` : `${style.link} `
                }>Гарантии на товар</NavLink>


            </div>


        </div>
    );
};

export default HowToBuyNav;