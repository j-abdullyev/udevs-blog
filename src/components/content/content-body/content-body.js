import React from 'react';
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import style from './content-body.module.css'
import Profile from "./body-left"
import NewsBlog from "./body-right"
import { collection, getDocs } from "@firebase/firestore";
import {db} from '../../../firebase'
import default_img from '../../../images/lewa.jpeg'



const ContentBody = () => {

    const [posts, setPosts] = useState([])
    const postsCollectionRef = collection(db, '7')
    const {id} = useParams()

    function getPosts(){
        getDocs(postsCollectionRef).then((res) => {
            setPosts(res.docs.map((doc) => ({...doc.data(), id:doc.id})))
        })
    }

    useEffect(() => {
        getPosts();
    }, [])

    
    return(
        <div className={style.content_body}>
            <div className={style.wrapper}>
                <Profile />
                <div className={style.content}>
                    {posts.map((item) => {
                        if(item.id === id){
                            return(
                                <div key={item.id}>
                                    { item.image ?  <img className={style.blog_img} src={item.image} alt=""/> : <img src={default_img}></img>}
                                    <div className={style.info_name}>Фото: Dilorom Alieva</div>
                                    <div className={style.date}> <span>18:26 11.01.2021</span>  <span>|</span> <span>365</span></div>
                                    <h2 className={style.title}>{item.title}</h2>
                                    <p className={style.body}>{item.text}</p>
                                </div>
                            )
                        }
                    })}
                </div>
                <NewsBlog />

            </div>

        </div>
    )
}


export default ContentBody