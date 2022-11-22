import React, { useEffect } from "react";
import BreadcrumbNews from "../Breadcrumb/BreadcrumbNews.jsx";
import Title from "../Title/Title.jsx";
import NewsDetailItem from "./NewsDetailItem.jsx";
import { useParams } from "react-router-dom";
import Preloader from "../Preloader/Preloader.jsx";
const NewsDetails = (props) => {
  const id = useParams();

  useEffect(() => {
    props.GetDetail(id.id);
  }, []);

  return (
    <div className="content">
      {props.detailLoading ? <Preloader /> : ""}
      <BreadcrumbNews />
      <Title arrow={false} title="Новости" />
      <NewsDetailItem detail={props.detail?.data} />
    </div>
  );
};

export default NewsDetails;
