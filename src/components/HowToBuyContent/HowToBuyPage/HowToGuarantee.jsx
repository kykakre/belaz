import React from "react";
import HowToBuyItem from "./HowToBuyItem.jsx";

const HowToGuarantee = (props) => {
  let guaranteeItem = props.helpsGuarantee?.map((e) => (
    <HowToBuyItem
      id={e.id}
      key={e.id}
      title={e.title}
      description={e.description}
      subType={e.subType}
      number={8}
    />
  ));
  return <div>{guaranteeItem}</div>;
};

export default HowToGuarantee;
