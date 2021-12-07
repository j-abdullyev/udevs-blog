import axios from "axios"
import React from 'react';
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import style from './content-body.module.css'
import img from '../../../images/guys.png'
import Profile from "./body-left"
import NewsBlog from "./body-right"



const ContentBody = () => {

    const [posts, setPosts] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getPosts();
    },[])

    function getPosts(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(({data}) => {
            setPosts(data)
        })
        .catch((error) => console.log(error))
    }
    return(
        <div className={style.content_body}>
            <div className={style.wrapper}>
                <Profile />
                <div className={style.content}>
                    <img src={img} alt=""></img>
                    <div className={style.info_name}>Фото: Dilorom Alieva</div>
                    <div className={style.date}> <span>18:26 11.01.2021</span>  <span>|</span> <span>365</span></div>
                    <h2 className={style.title}>{posts.title}</h2>
                    <p className={style.body}>{posts.body}</p>
                </div>
                <NewsBlog />

            </div>

        </div>
    )
}


export default ContentBody