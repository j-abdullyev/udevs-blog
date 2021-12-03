import style from './blog-list.module.css'



const BlogListItem = (props) => {
    return(
        <div className={style.blog_item}>
            <img src={props.src}/>
            <div className={style.date}> <span>18:26 11.01.2021</span>  <span>|</span> <span>365</span></div>
            <div className={style.comment}>ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....</div>
        </div>
    )

}



export default BlogListItem