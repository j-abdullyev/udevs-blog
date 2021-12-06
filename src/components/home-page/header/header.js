import style from './header.module.css' 
import logo from '../../../images/logo.png'
import bell from '../../../images/bell.png'
import React from 'react';
import Menu from './menu'

const Header = () => {
    return(
        <div className={style.container}>
            <div className={style.header}>
                <img className={style.logo} src={logo} alt=""/>
                <div className={style.reg}>
                    <img className={style.bell} src={bell} alt=""/>
                    <button className={style.enter_btn}>Войти</button>
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default Header