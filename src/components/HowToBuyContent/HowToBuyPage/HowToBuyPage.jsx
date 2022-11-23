import React from "react";
import HowToBuyItem from "./HowToBuyItem.jsx";
import style from "./HowToBuy.module.scss";
const HowToBuyPage = (props) => {
  let buyItem = props.helpsBuy?.map((e) => (
    <HowToBuyItem
      id={e.id}
      key={e.id}
      title={e.title}
      description={e.description}
      subType={e.subType}
      number={7}
    />
  ));

  return (
    <div>
      <div className={style.pageTitle}>
        Вы можете выбрать один из двух вариантов оплаты
      </div>
      {buyItem}
    </div>
  );
};

export default HowToBuyPage;
