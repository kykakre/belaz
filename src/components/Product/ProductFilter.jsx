import React from 'react';
import style from "./Product.module.scss"
import { Checkbox } from 'antd';
import { Slider } from 'antd';
import filter from "../../assets/filter.svg"
const ProductFilter = (props) => {
    return (
        <div className={style.filter}>
                <div className={style.filterTop}>
                        <div className={style.filterText}>Фильтр</div>
                        <img className={style.filterIcon} src={filter}/>
                </div>
            <div className={style.titleFilter}>Цена</div>
            <Slider
                range={{
                    draggableTrack: true,
                }}
                defaultValue={[1924, 50600]}
                max={50687}
                min={1924}
            />
            <Checkbox >Акции</Checkbox>
            <Checkbox >Домкраты</Checkbox>
            <Checkbox >Камеры тормозные</Checkbox>
            <Checkbox >Компрессоры для накачки шин</Checkbox>
            <Checkbox >Грузовые диски и корзины сцепления</Checkbox>
            <Checkbox >Щетки, поводки стеклоочистителя</Checkbox>
            <Checkbox >Подставки под автомобиль</Checkbox>
            <Checkbox >Камеры тормозные с энергоаккумулятором</Checkbox>
            <Checkbox >Тормозные клапаны</Checkbox>
            <Checkbox >Зеркала</Checkbox>
            <Checkbox >Пневмогидравлические усилители привода сцепления (ПГУ)</Checkbox>
            <Checkbox >Гайковерты</Checkbox>
            <Checkbox >Регуляторы давления воздуха (РДВ)</Checkbox>
            <Checkbox >Регулировочные рычаги тормоза</Checkbox>
            <Checkbox >Фитинги соединительные</Checkbox>
            <Checkbox >Насосы перекачки топлива</Checkbox>
            <Checkbox >Армотизаторы</Checkbox>
            <Checkbox >Тормозные краны</Checkbox>
            <Checkbox >Насосы ГУР</Checkbox>
            <Checkbox >Насосы отопителя циркуляционные</Checkbox>
            <Checkbox >Осушители воздуха</Checkbox>
            <Checkbox >Пресс-масленки</Checkbox>
            <Checkbox >Трапеция (механизм) стеклоочистителя</Checkbox>
            <Checkbox >Шприцы и комплектующие</Checkbox>
            <Checkbox >Электродвигатели</Checkbox>
            <Checkbox >Электробензонасосы</Checkbox>

        </div>
    );
};

export default ProductFilter;