import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem.jsx";
import style from "./Product.module.scss";
import ProductSelectSort from "./ProductSelectSort.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import ProductItemLine from "./ProductItemLine.jsx";
import PaginationBlock from "../Pagination/PaginationBlock.jsx";
import TitleProducts from "../Title/TitleProducts.jsx";
import ProductFilter from "./ProductFilter.jsx";
export default function ProductsCategory(props) {
  const [line, setLine] = useState(false);
  const [current, setCurrent] = useState(1);
  let item = props.products.data?.map((e) => (
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

  let itemLine = props.products.data?.map((e) => (
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

  useEffect(() => {
    props.GetProducts(current, 20, props.id);
  }, [current]);

  return (
    <>
      <div className={style.flexBetween}>
        <TitleProducts />
        <div className={style.sortFlex}>
          <ProductSelectSort />
          <LineOrBlock line={line} setLine={setLine} />
        </div>
      </div>
      <div className="product">
        {props.products.data.length === 0 ? (
          "В данной категории товары не найдены, уточняйте информацию у продавца"
        ) : (
          <>
            <div className="filter"></div>
            <div className="cards">
              {line ? itemLine : item}
              <PaginationBlock
                Function={props.Products}
                current={current}
                setCurrent={setCurrent}
                total={props.products?.pageCount}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
