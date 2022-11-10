import React, {useEffect, useState} from 'react';
import style from "./Product.module.scss"
import { Checkbox } from 'antd';
import { Slider } from 'antd';
import filter from "../../assets/filter.svg"
const ProductFilter = (props) => {

    const[inputValue,setInputValue]=useState([props.filter?.minPrice,props.filter?.maxPrice])
    let category = []


    function useDebounce(inputValue,category, delay) {
        const [debouncedValue, setDebouncedValue] = useState(inputValue,category)

        useEffect(() => {
            const timer = setTimeout(() => setDebouncedValue(inputValue,category), delay || 500)

            return () => {
                clearTimeout(timer)
            }
        }, [inputValue,category, delay])

        return debouncedValue
    }
    const debouncedValue = useDebounce(inputValue,category, 700)



    useEffect(() => {
        console.log(props.current,20,inputValue[0],inputValue[1],category)
        props.Function(props.current,20,inputValue[0],inputValue[1],category)
    }, [debouncedValue])




        const onChange = (newValue) => {
                setInputValue(newValue);
        };





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
                defaultValue={[1, 2]}

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