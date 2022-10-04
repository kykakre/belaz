import React from 'react';
import HowToBuyItem from "./HowToBuyItem.jsx";

const HowToBuy = (props) => {
    let buyItem = props.helpsAll.map((e)=>(
        <HowToBuyItem id={e.id} key={e.id} title={e.title} text={e.text}/>
    ))
    return (
        <div>
            {buyItem}
        </div>
    );
};

export default HowToBuy;