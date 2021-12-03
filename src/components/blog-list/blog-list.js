import BlogListItem from "./blog-list-item"
import style from './blog-list.module.css'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'



const BlogList = () => {
    return(
        <div className={style.blog_container}>
            <BlogListItem src={img1}/>
            <BlogListItem src={img2}/>
            <BlogListItem src={img3}/>
            <BlogListItem src={img1}/>
            <BlogListItem src={img1}/>
            <BlogListItem src={img2}/>
            <BlogListItem src={img3}/>
            <BlogListItem src={img1}/>
            <BlogListItem src={img1}/>
            <BlogListItem src={img2}/>
            <BlogListItem src={img3}/>
            <BlogListItem src={img1}/>
        </div>
    )

}


export default BlogList