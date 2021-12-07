import style from './header.module.css' 
import logo from '../../../images/logo.png'
import bell from '../../../images/bell.png'
import React from 'react';
import Menu from './menu'
import { useState } from 'react';
import ava from '../../../images/real.png'
import signout from '../../../images/signout.png'

const Header = () => {
    const [open, setOpen] = useState(false);
    const authorized = localStorage.getItem("Authorized")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function Submit(e){
        const data = {
            email: "jony@mail.com",
            password: '123'
        }
        if(data.email === email && data.password === password){
            localStorage.setItem("Authorized", true)
        }
    }

    function signOut(){
        localStorage.removeItem("Authorized")
        window.location.reload(false);
    }

    return(
        <div className={style.container}>
            <div className={style.header}>
                <img className={style.logo} src={logo} alt=""/>
                <div className={style.reg}>
                    <img className={style.bell} src={bell} alt=""/>
                    {!authorized &&  <button className={style.enter_btn} onClick={()=> setOpen(true)}>Войти</button>}
                    {authorized && 
                    <div className={style.authorized}>
                        <img src={ava} className={style.ava} />
                        <img src={signout} onClick={signOut} title="sign out" className={style.sign_out}/>
                    </div>
                        }
                    {/* <button className={style.enter_btn} onClick={()=> setOpen(true)}>Войти</button> */}
                    
                </div>
            </div>
            <Menu />
            <div className={`${style.modal} ${open ? style.visible : ""}`}>
                <div className={style.login_header}>Вход на udevs news</div>
                <form onSubmit={Submit}>
                    <input onChange={(event) => setEmail(event.target.value)} className={style.email} type="email" placeholder="Email" />
                    <input onChange={(event) => setPassword(event.target.value)} className={style.parol} type="password" placeholder="Пароль"/>
                    <button type="submit" className={style.enter}>Войти</button>
                </form>
                <button className={style.close} onClick={()=> setOpen(false)}>X</button>
            </div>
            {open && <div className={style.overlay}/>}
                
        </div>
    )
}

export default Header