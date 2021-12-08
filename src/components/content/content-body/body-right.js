import axios from 'axios'
import React from 'react';
import { useEffect, useState } from 'react'
import style from './content-body.module.css'
import img from '../../../images/sigar.png'
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../../../firebase';


const NewsBlog = () => {

    const [news, setNews] = useState([])
    const postsCollectionRef = collection(db, '7')
 

    useEffect(() => {
        getNewsPost()
    },[])

    function getNewsPost() {
        getDocs(postsCollectionRef).then((res) => {
            setNews(res.docs.map((doc) => ({...doc.data(), id:doc.id})))
        })
    }


    return(
        <div className={style.news_blog}>
            <div className={style.news_header}>ЛУЧШИЕ БЛОГИ</div>
            <div className={style.news}>
                
                <div className={style.recent_news}> {news.map((item) => (
                    <div className={style.news_item} key={item.id}>
                        <img src={item.image} alt=""></img>
                        <div>{item.title}
                            <div className={style.date1}> <span>18:26 11.01.2021</span>  <span>|</span> <span>365</span></div>
                        </div>
                    </div>
                ))} </div>
            </div>
            
        </div>
    )
}

export default NewsBlog