import React from 'react';
import style from "./Search.module.scss"
import search from "../../assets/search.svg"
const Search = (props) => {
    return (
        <form className={style.flex}>
            <input placeholder="Искать товары и категории" className={style.input}/>
            <button className={style.button}>
                <img src={search} className={style.icon}/>
            </button>
        </form>
    );
};

export default Search;