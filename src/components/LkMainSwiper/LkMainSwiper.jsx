import React from 'react';
import {NavLink} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import style from "./LkMainSwiper.module.scss"

import LkMainSwiperSlide from "./LkMainSwiperSlide.jsx";
const LkMainSwiper = (props) => {

    let slide = props.slide.map((e)=>(
        <SwiperSlide key={e.id}>
            <LkMainSwiperSlide id={e.id} key={e.id} img={e.img} text={e.text} />
        </SwiperSlide>
    ))
    return (
        <div>
            <div className={style.flex}>
                <div className={style.title}>{props.title}</div>
                <NavLink to="" className={style.link}>Подробнее</NavLink>
            </div>
            <div className={style.flexSwiper}>
                <Swiper
                    modules={[Navigation]}

                    slidesPerView={4}
                    spaceBetween={20}
                    className={style.swiper}
                    navigation={{ nextEl: ".next"}}

                >
                    {slide}
                </Swiper>
                <div className="next" >
                    <div className={style.arrow}/>
                </div>

            </div>



        </div>
    );
};

export default LkMainSwiper;