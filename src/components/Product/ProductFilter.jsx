import React, {useEffect, useState} from 'react';
import style from "./Product.module.scss"
import { Checkbox } from 'antd';
import { Slider } from 'antd';
import filter from "../../assets/filter.svg"
const ProductFilter = (props) => {

    console.log(props.filter?.maxPrice)

    const[inputValue,setInputValue]=useState([1,447031])
    const[category,setCategory]  =useState ([])


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
        props.Function(props.current,20,inputValue[0],inputValue[1],category)
    }, [debouncedValue,props.current,category])




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

                min={props.filter?.minPrice}
                max={props.filter?.maxPrice}
                defaultValue={[1, 447031]}

                onChange={onChange}
            />
                {props.filter?.categories.map((e)=>(
                    <Checkbox id={e.id} key={e.key} onClick={(value)=>{
                        setCategory(category =>
                            !!value.target.checked
                                ? [...category, e.id]
                                : category.filter(category => category !== e.id)
                        )


                    }}>{e.title}</Checkbox>
                ))}

        </div>
    );
};

export default ProductFilter;