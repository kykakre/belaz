import React from "react";
import CategoryItem from "./CategoryItem.jsx";
import style from "./Category.module.scss";
const Category = (props) => {
  let item = props.category?.data?.map((e) => (
    <CategoryItem
      id={e.id}
      key={e.id}
      img={e.img}
      title={e.title}
      description={e.description}
    />
  ));
  return <div className={style.categoryContainer}>{item}</div>;
};

export default Category;
