import React, {useEffect,useState} from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbNews from "../components/Breadcrumb/BreadcrumbNews.jsx";
import NewsContent from "../components/NewsContent/NewsContent.jsx";

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
            <Search/>
            <BreadcrumbNews/>
            <NewsContent  year={year} setYear={setYear} GetNewsAll={props.GetNewsAll} detail={props.detail} news={props.news}/>
        </div>
    );
};

export default News;