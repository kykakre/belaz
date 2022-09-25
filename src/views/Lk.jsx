import React from 'react';
import LkBlock from "../components/Lk/LkBlock/LkBlock.jsx"
import LkSetting from "../components/Lk/LkSetting/LkSetting.jsx";
import {Route,Routes} from "react-router-dom";
import LkNotification from "../components/Lk/LkNotification/LkNotification.jsx";
import LkHistoryContainer from "../components/Lk/LkHistory/LkHistoryContainer.jsx";
const Lk = (props) => {
    return (
        <div className="lk">
            <LkBlock personInfo={props.personInfo}/>
            <Routes>
                <Route path="setting" element={<LkSetting/>}/>
                <Route path="notification" element={<LkNotification/>}/>
                <Route path="history" element={<LkHistoryContainer/>}/>
            </Routes>
        </div>
    );
};

export default Lk;