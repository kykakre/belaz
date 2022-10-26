import React from 'react';
import LkBlock from "../components/Lk/LkBlock/LkBlock.jsx"
import LkSetting from "../components/Lk/LkSetting/LkSetting.jsx";
import {Route,Routes} from "react-router-dom";
import LkNotification from "../components/Lk/LkNotification/LkNotification.jsx";
import LkHistoryContainer from "../components/Lk/LkHistory/LkHistoryContainer.jsx";
import LkFavoriteContainer from "../components/Lk/LkFavorite/LkFavoriteContainer.jsx";
import LkDeliveryContainer from "../components/Lk/LkDelivery/LkDeliveryContainer.jsx";
import LkMain from "../components/Lk/LkMain/LkMain.jsx";
import LkMainContainer from "../components/Lk/LkMain/LkMainContainer.jsx";
const Lk = (props) => {
    return (
        <div className="lk">
            <LkBlock personInfo={props.personInfo}/>
            <Routes>
                <Route path="setting" element={<LkSetting/>}/>
                <Route path="" element={<LkMainContainer/>}/>
                <Route path="notification" element={<LkNotification/>}/>
                <Route path="history" element={<LkHistoryContainer/>}/>
                <Route path="favorite" element={<LkFavoriteContainer/>}/>
                <Route path="order" element={<LkDeliveryContainer/>}/>
            </Routes>
        </div>
    );
};

export default Lk;