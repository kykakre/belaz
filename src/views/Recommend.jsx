import React, { useEffect } from "react";
import Search from "../components/Search/Search.jsx";
import BreadcrumbRecomendate from "../components/Breadcrumb/BreadcrumbRecomendate.jsx";
import ProductRecomend from "../components/Product/ProductRecomend.jsx";
import Preloader from "../components/Preloader/Preloader.jsx";
import { GetRecommendFiltered } from "../store/slice/recommendSlice.js";
import {GetSearch} from "../store/slice/searcSlice.js";

const Recommend = (props) => {
  useEffect(() => {
    props.GetRecommends(1, 20);
    props.GetFilter();
  }, []);

  return (
    <div className="content">
      {props.recommendLoading ? <Preloader /> : ""}
      <Search GetSearch={props.GetSearch}/>
      <BreadcrumbRecomendate />
      <ProductRecomend
        GetRecommends={props.GetRecommends}
        product={props.recommend}
        GetFilter={props.GetFilter}
        GetRecommendFiltered={props.GetRecommendFiltered}
        filter={props.filter}
      />
    </div>
  );
};

export default Recommend;
