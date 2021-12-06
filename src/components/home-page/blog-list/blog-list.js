import BlogListItem from "./blog-list-item"
import style from './blog-list.module.css'
import img1 from '../../../images/img1.png'
import img2 from '../../../images/img2.png'
import img3 from '../../../images/img3.png'
import axios from 'axios'
import { useEffect, useState } from "react"

let randomImages = []
let index = 0;
randomImages[0] = img1
randomImages[1] = img2
randomImages[2] = img3
index = Math.floor(Math.random() * randomImages.length)


const BlogList = () => {

    const [post, setPost] = useState([]);
    useEffect(() => {
        getPost()
    },[])

    function getPost(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({data}) => {
            setPost(data)
        })
        .catch(error => console.log(error))
    }

    return(
        <div className={style.blog_container}>
            <div className={style.blog_container_inner}>
                {post.map((item, id) => (
                    <BlogListItem key={item.id} title={item.title} id={item.id} img={randomImages[index]} />
                ))}
            </div>
        </div>
    )

}


export default BlogList