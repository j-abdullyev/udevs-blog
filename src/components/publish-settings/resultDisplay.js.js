import style from '../profile-page/profile-info/profileInfo.module.css'

const ResultDisplay = (props) => {
    return(
        <div>
            
            <div className={style.publication_block}>
                    <img alt="image"></img>
                    <div className={style.publication_text}>
                        <div className={style.p_header}>{props.title}</div>
                        <div className={style.p_date}>18:26  11.01.2021 <span>|</span> <span>365</span> <span className={style.human_rights}>Права человека</span> </div>
                        <div className={style.p_text}>{props.text}</div>
                        <button className={style.read_btn}>Читать</button>
                    </div>
                </div>
          
           
        </div>
    )
}


export default ResultDisplay