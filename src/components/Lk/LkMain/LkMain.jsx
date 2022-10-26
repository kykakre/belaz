import React from 'react';
import style from "./LkMain.module.scss"
import LkMainSwiper from "../../LkMainSwiper/LkMainSwiper.jsx";
import LkMainBunner from "../../LkMainBunner/LkMainBunner.jsx";
import LkMainTable from "../../LkMainTable/LkMainTable.jsx"
import LkMainPromo from "../../LkMainPromo/LkMainPromo.jsx";

const LkMain = (props) => {
    return (
        <div className="block">
            <LkMainSwiper title="История просмотров" slide={props.slide}/>
            <LkMainBunner title="Новые товары уже в продаже!" subtitle="Смотреть каталог"/>
            <LkMainSwiper title="Избранное" slide={props.slide}/>
            {/*<LkMainTable title="История заказов" order={props.order}/>*/}
            <LkMainPromo/>
        </div>
    );
};

export default LkMain;