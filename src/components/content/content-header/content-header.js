import style from './content-header.module.css' 
import logo from '../../../images/logo.png'
import React from 'react';

const ContentHeader = () => {
    return(
        <div className={style.container}>
            <div className={style.header}>
                <img className={style.logo} src={logo} alt=""/>
                <div className={style.inner_menu}>
                    <div>Все потоки</div>
                    <div>Разработка</div>
                    <div>Администрирование</div>
                    <div>Дизайн</div>
                    <div>Менеджмент</div>
                    <div>Маркетинг</div>
                    <div>Научпоп</div>
                </div>
                <button className={style.enter_btn}>Войти</button>
            </div>
        </div>
    )
}

export default ContentHeader