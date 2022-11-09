import React, {useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import newsIcon from "../../assets/newsIcon.svg"
import style from "./NewsContent.module.scss"
import NewsContentItem from "./NewsContentItem.jsx";
import ContactsMin from "../ContactsMini/ContactsMin.jsx";
import LinkMini from "../LinkMini/LinkMini.jsx";
import AskMini from "../AskMini/AskMini.jsx";
import {GetDetail} from "../../store/slice/newsSlice.js";
const NewsContent = (props) => {



    let item = props.news.data?.map((e)=>(
        <NewsContentItem GetDetail={props.GetDetail} id={e.id} key={e.id} name={e.name} text={e.text} createdAt={e.createdAt} img={e.img}/>
    ))
    return (
        <div className={style.container}>
            <Tabs>
                <div className={style.newsTitle}>
                    <div className={style.title}>
                        Новости
                    </div>
                    <TabList className={style.tabs}>
                        <Tab selectedClassName={style.tabActive} onClick={()=>props.setYear(2022)}  className={style.tab}>За все время</Tab>
                        <Tab selectedClassName={style.tabActive} onClick={()=>props.setYear(2022)} className={style.tab}>2022</Tab>
                        <Tab selectedClassName={style.tabActive}  onClick={()=>props.setYear(2021)} className={style.tab}>2021</Tab>
                        <Tab selectedClassName={style.tabActive}  onClick={()=>props.setYear(2020)} className={style.tab}>2020</Tab>
                        <Tab selectedClassName={style.tabActive}  className={style.tabIcon}>
                            <img alt="icon" src={newsIcon}/>
                        </Tab>
                    </TabList>
                </div>
                <div className={style.flex}>
                    <div className={style.sidebar}>
                        <ContactsMin/>
                        <AskMini/>
                        <LinkMini/>
                    </div>
                    <div className={style.content}>
                        <TabPanel>{item}</TabPanel>
                        <TabPanel>{item}</TabPanel>
                        <TabPanel>{item}</TabPanel>
                        <TabPanel>{item}</TabPanel>
                        <TabPanel>{item}</TabPanel>
                    </div>
                </div>

            </Tabs>

        </div>

    );
};

export default NewsContent;