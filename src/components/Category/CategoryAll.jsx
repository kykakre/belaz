import React, { useState } from "react";
import style from "./Category.module.scss";
import Title from "../Title/Title.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import CategoryItem from "./CategoryItem.jsx";
import CategoryItemLine from "./CategoryItemLine.jsx";
const CategoryAll = (props) => {
  const [line, setLine] = useState(false);

  let item = props.category?.data?.map((e) => (
    <CategoryItem
      id={e.id}
      key={e.id}
      img={e.img}
      title={e.title}
      description={e.description}
    />
  ));
  let itemLong = props.category?.data?.map((e) => (
    <CategoryItemLine
      id={e.id}
      countProducts={e.countProducts}
      key={e.id}
      img={e.img}
      title={e.title}
      description={e.description}
    />
  ));
  return (
    <>
      <div className={style.flexBetween}>
        <Title arrow={false} title={"Все категории"} />
        <LineOrBlock line={line} setLine={setLine} />
      </div>
      <div className={style.categoryContainer}>{line ? itemLong : item}</div>
    </>
  );
};

export default CategoryAll;
