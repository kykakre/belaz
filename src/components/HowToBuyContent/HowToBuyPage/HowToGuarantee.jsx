import React from 'react';
import HowToBuyItem from "./HowToBuyItem.jsx";

const HowToGuarantee = (props) => {
    let guaranteeItem = props.helpsGuarantee.map((e)=>(
        <HowToBuyItem id={e.id} key={e.id} title={e.title} text={e.text}/>
    ))
    return (
        <div>
            {guaranteeItem}
        </div>
    );
};

export default HowToGuarantee;