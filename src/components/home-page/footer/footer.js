import style from './footer.module.css'
import logo from '../../../images/logo.png'
import React from 'react';



const Footer = () => {
    return(
        <div className={style.footer}>
            <div className={style.footer_inner}>
                <div className={style.footer_block}>
                    <img src={logo} />
                    <div className={style.text}>Помощник в публикации статей, журналов.
                        Список популярных международных конференций.
                        Всё для студентов и преподавателей.
                    </div>
                </div>
                <div className={style.footer_block}>
                    <div className={style.footer_header_list}>Ресурсы</div>
                    <div className={style.list}>Статьи</div>
                    <div className={style.list}>Журналы</div>
                    <div className={style.list}>Газеты</div>
                    <div className={style.list}>Диплом</div>
                </div>
                <div className={style.footer_block}>
                    <div className={style.footer_header_list}>О нас</div>
                    <div className={style.list}>Контакты</div>
                    <div className={style.list}>Помощь</div>
                    <div className={style.list}>Заявки</div>
                    <div className={style.list}>Политика</div>
                </div>
                <div className={style.footer_block}>
                    <div className={style.footer_header_list}>Помощь</div>
                    <div className={style.list}>Часто задаваемые вопросы</div>
                </div>
            </div>
            <div className={style.copy_right}>Copyright © 2020. LogoIpsum. All rights reserved.</div>
        </div>
    )
    
}


export default Footer