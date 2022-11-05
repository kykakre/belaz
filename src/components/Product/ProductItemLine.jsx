import React from 'react';
import style from "./Product.module.scss";
import star from "../../assets/star.svg"
import buy from "../../assets/buy.svg"
import favorite from "../../assets/favorite.svg"
const ProductItemLine = (props) => {
    return (
        <div className={style.lineFlex}>
            <div className={style.lineContain}>
            <img  alt="product" src={"https://s.stats.cfd/"+props.img} className={style.lineImg}/>
            {props.special ? <div className={style.special}>Спецпредложение</div> : <></> }
            </div>
            <div>
                <div className={style.lineTitle}>{props.title}</div>
                <div className={style.grabe}>
                    <img alt="star" src={star} className={style.lineStar}/>
                    <div>{props.grabe} ({props.totalGrabe} оценок)</div>

                </div>
                <div className={style.description}>{props.description}</div>
                <div className={style.lineSell}>
                    <div className={style.lineValue}>{props.price} ₽</div>
                    <div className={style.sortFlex}>
                        <img alt="favorite" className={style.lineFavorite} src={favorite}/>
                        <div className={style.lineBuy}>
                            <div className={style.lineBuyText}>В корзину</div>
                            <img alt="buyIcon" src={buy} className={style.lineBuyIcon}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductItemLine;