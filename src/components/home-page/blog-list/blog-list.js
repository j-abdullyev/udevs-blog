import BlogListItem from "./blog-list-item"
import style from './blog-list.module.css'
import React from 'react';
import axios from 'axios'
import { useEffect, useState } from "react"
import {db} from '../../../firebase'
import {collection, getDocs} from '@firebase/firestore'



const BlogList = () => {

    const [post, setPost] = useState([]);
    const postsCollectionRef = collection(db, '7');

    useEffect(() => {
        getPosts()
    },[])

    // function getPost(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(({data}) => {
    //         let sliced = data.slice(0,15)
    //         setPost(sliced)
    //     })
    //     .catch(error => console.log(error))
    // }

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