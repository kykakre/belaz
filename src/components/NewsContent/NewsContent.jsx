import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import newsIcon from "../../assets/newsIcon.svg"
import style from "./NewsContent.module.scss"
import NewsContentItem from "./NewsContentItem.jsx";
import ContactsMin from "../ContactsMini/ContactsMin.jsx";
import LinkMini from "../LinkMini/LinkMini.jsx";
import AskMini from "../AskMini/AskMini.jsx";
const NewsContent = (props) => {

    let item = props.news.map((e)=>(
        <NewsContentItem id={e.id} key={e.id} title={e.title} leed={e.leed} data={e.data} photo={e.photo}/>
    ))
    return (
        <div className={style.container}>
            <Tabs>
                <div className={style.newsTitle}>
                    <div className={style.title}>
                        Новости
                    </div>
                    <TabList className={style.tabs}>
                        <Tab selectedClassName={style.tabActive}  className={style.tab}>За все время</Tab>
                        <Tab selectedClassName={style.tabActive} className={style.tab}>2022</Tab>
                        <Tab selectedClassName={style.tabActive} className={style.tab}>2021</Tab>
                        <Tab selectedClassName={style.tabActive} className={style.tab}>2020</Tab>
                        <Tab selectedClassName={style.tabActive} className={style.tabIcon}>
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