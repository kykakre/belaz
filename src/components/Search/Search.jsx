import React,{useState} from 'react';
import style from "./Search.module.scss"
import search from "../../assets/search.svg"
import {NavLink} from "react-router-dom";

const Search = (props) => {
    const[searchText,setSearchText] = useState("")
    console.log(searchText)
    return (
        <div className={style.flex}>
            <input placeholder="Искать товары и категории" value={searchText} onChange={(e)=> {
                setSearchText(e.target.value)
            }} className={style.input}/>


                    <NavLink className={style.button} to={"/search/" + searchText} onClick={()=>props.GetSearch(1,20,searchText)}>

                    <img src={search} className={style.icon}/>
                </NavLink>


        </div>
    );
};

export default Search;