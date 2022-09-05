import React, {useState} from 'react';
import style from "../Category/Category.module.scss";
import Title from "../Title/Title.jsx";
import CategorySort from "../Category/CategorySort.jsx";

const ProductAll = () => {
    const [line,setLine] = useState(false)
    return (
        <>
                <Title arrow={false} title={"Скидки и акции"}/>
                <div>

                <CategorySort line={line} setLine={setLine}/>
                </div>

        </>
    );
};

export default ProductAll;