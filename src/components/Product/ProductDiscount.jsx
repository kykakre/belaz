import React, { useState } from "react";
import style from "./Product.module.scss";
import Title from "../Title/Title.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import ProductSelectSort from "./ProductSelectSort.jsx";
import ProductItem from "./ProductItem.jsx";
import ProductFilter from "./ProductFilter.jsx";
import TitleDiscount from "../Title/TitleDiscount.jsx";
import ProductItemLine from "./ProductItemLine.jsx";
import PaginationBlock from "../Pagination/PaginationBlock.jsx";

const ProductDiscount = (props) => {
  const [line, setLine] = useState(false);
  const [current, setCurrent] = useState(1);
  let item = props.availables.data?.map((e) => (
    <ProductItem
      id={e.id}
      key={e.id}
      title={e.title}
      special={e.special}
      img={e.img}
      grabe={e.grabe}
      totalGrabe={e.totalGrabe}
      price={e.price}
    />
  ));
  let itemLine = props.availables.data?.map((e) => (
    <ProductItemLine
      id={e.id}
      key={e.id}
      title={e.title}
      special={e.special}
      img={e.img}
      grabe={e.grabe}
      totalGrabe={e.totalGrabe}
      price={e.price}
      description={e.description}
    />
  ));
  return (
    <>
      <div className={style.flexBetween}>
        <TitleDiscount />
        <div className={style.sortFlex}>
          <ProductSelectSort />
          <LineOrBlock line={line} setLine={setLine} />
        </div>
      </div>
      <div className="product">
        <div className="filter">
          <ProductFilter
            current={current}
            setCurrent={setCurrent}
            Function={props.GetAvailablesFiltered}
            filter={props.filter?.data}
            GetFilter={props.GetFilter}
          />
        </div>
        <div className="cards">
          {line ? itemLine : item}
          <PaginationBlock
            Function={props.GetAvailables}
            current={current}
            setCurrent={setCurrent}
            total={props.availables?.pageCount}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDiscount;
