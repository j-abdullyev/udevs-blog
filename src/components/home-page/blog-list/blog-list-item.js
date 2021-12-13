import { Link } from 'react-router-dom'
import style from './blog-list.module.css'
import React from 'react';
import default_img from '../../../images/lewa.jpeg'



const BlogListItem = ({ id, image, title}) => {
    return(
        <div className={style.blog_item}>
            <Link to={`/post/${id}`}>
                { image ?  <img className={style.blog_img} src={image} alt=""/> : <img src={default_img}></img>}
            </Link>
            <div className={style.date}> <span>18:26 11.01.2021</span>  <span>|</span> <span>365</span></div>
            <Link to={`/post/${id}`}>{title}</Link>
        </div>
    )

}


export default BlogListItem