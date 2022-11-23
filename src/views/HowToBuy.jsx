import React, { useEffect } from "react";
import Search from "../components/Search/Search.jsx";
import HowToBuyContent from "../components/HowToBuyContent/HowToBuyContent.jsx";
import BreadcrumbHowToBuy from "../components/Breadcrumb/BreadcrumbHowToBuy.jsx";
import Preloader from "../components/Preloader/Preloader.jsx";

const HowToBuy = (props) => {
  useEffect(() => {
    props.GetNewsAll(1, 5, 2022);
    props.GetHelp();
  }, []);

  return (
    <div className="content">
      {props.helpLoading ? <Preloader /> : ""}
      <Search />
      <BreadcrumbHowToBuy />
      <HowToBuyContent helps={props.helps} news={props.news} />
    </div>
  );
};

export default HowToBuy;
