import { Link } from 'react-router-dom'
import style from './blog-list.module.css'



const BlogListItem = ({item, id, img, title}) => {
    return(
        <div className={style.blog_item}>
            <Link to={`/post/${id}`}>
                <img src={img} />
            </Link>
            <div className={style.date}> <span>18:26 11.01.2021</span>  <span>|</span> <span>365</span></div>
            <Link to={`/post/${id}`}>{title}</Link>
        </div>
    )

}



export default BlogListItem