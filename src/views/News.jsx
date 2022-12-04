import React, {useEffect,useState} from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbNews from "../components/Breadcrumb/BreadcrumbNews.jsx";
import NewsContent from "../components/NewsContent/NewsContent.jsx";
import Preloader from '../components/Preloader/Preloader.jsx';
import {GetSearch} from "../store/slice/searcSlice.js";

const News = (props) => {


    const[year,setYear]=useState(2022)

    useEffect(() =>{

        props.GetNewsAll(
            1,10,year
        );

    }, [])

    useEffect(() =>{

        props.GetNewsAll(
            1,10,year
        );

    }, [year])

    return (
        <div className="content">
            {props.newsLoading?<Preloader/>:""}
            <Search GetSearch={props.GetSearch}/>
            <BreadcrumbNews/>
            <NewsContent  year={year} setYear={setYear} GetNewsAll={props.GetNewsAll} detail={props.detail} news={props.news}/>
        </div>
    );
};

export default News;