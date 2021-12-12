import BlogListItem from "./blog-list-item"
import style from './blog-list.module.css'
import React from 'react';
import { useEffect, useState } from "react"
import {db} from '../../../firebase'
import {addDoc, collection, getDocs} from '@firebase/firestore'




const BlogList = (props) => {
    

    const [post, setPost] = useState([]);   
    const postsCollectionRef = collection(db, '7');


    useEffect(() => {
        getPosts()
    },[])

    function getPosts() {
        getDocs(postsCollectionRef).then((res) => {
            setPost(res.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        })
    }

    
    return(
        <div className={style.blog_container}>
            <div className={style.blog_container_inner}>
         
                {post.map((item) => (
                    <BlogListItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}


export default BlogList