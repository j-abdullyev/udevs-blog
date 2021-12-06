import axios from 'axios'
import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import style from './content-body.module.css'
import img from '../../../images/sigar.png'


const NewsBlog = () => {

    const [news, setNews] = useState([])
 

    useEffect(() => {
        getNewsPost()
    },[])

    function getNewsPost(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({data}) => {
            setNews(data)
        })
        .catch(error => console.log(error))
    }


    return(
        <div className={style.news_blog}>
            <div className={style.news_header}>ЛУЧШИЕ БЛОГИ</div>
            <div className={style.news}>
                
                <div className={style.recent_news}> {news.map((item) => (
                    <div className={style.news_item} key={item.id}>
                        <img src={img}></img>
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