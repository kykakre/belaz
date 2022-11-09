import React, {useEffect, useState} from 'react';
import style from "./Product.module.scss"
import { Checkbox } from 'antd';
import { Slider } from 'antd';
import filter from "../../assets/filter.svg"
const ProductFilter = (props) => {


        const[inputValue,setInputValue]=useState([props.filter?.minPrice,props.filter?.maxPrice])


        const onChange = (newValue) => {
                setInputValue(newValue);
        };

        let category = []

    useEffect(() =>{

        props.Function(props.current,20,inputValue[0],inputValue[1],category)



    }, [inputValue,category])


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
                defaultValue={[props.filter?.minPrice, props.filter?.maxPrice]}

                min={props.filter?.minPrice}
                max={props.filter?.maxPrice}
                onChange={onChange}
            />
                {props.filter?.categories.map((e)=>(
                    <Checkbox id={e.id} key={e.key} onClick={(value)=>{
                       if(value.target.checked === true){
                           category.push(e.id)
                       }
                       if(value.target.checked === false){

                          let i = category.indexOf(e.id);
                           if(i >= 0) {
                               category.splice(i,1);
                           }

                       }

                    }}>{e.title}</Checkbox>
                ))}

        </div>
    );
};

export default ProductFilter;