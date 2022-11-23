import React from "react";
import HowToBuyItem from "./HowToBuyItem.jsx";

const HowToDelivery = (props) => {
  let buyItem = props.helpsDelivery?.map((e) => (
    <HowToBuyItem
      id={e.id}
      key={e.id}
      title={e.title}
      description={e.description}
      subType={e.subType}
      number={6}
    />
  ));
  return <div>{buyItem}</div>;
};

export default HowToDelivery;
