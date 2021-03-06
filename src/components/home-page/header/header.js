import style from './header.module.css' 
import logo from '../../../images/logo.png'
import Menu from './menu'
import { useState } from 'react';
import ava from '../../../images/real.png'
import signout from '../../../images/signout.png'
import'../../../App.css'
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../../firebase';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [registerEmail, setregisterEmail] = useState("")
    const [registerPassword, setregisterPassword] = useState('')
    const [user, setUser] =useState()
    
     onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
   
    const signUp = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
            console.log(registerEmail)
            window.location.reload(false);
        }catch(error){
            console.log(error.message)
            if (registerEmail === '' || registerPassword === '') {
                alert("Fill the blanks")
            } else { 
                alert("Enter valid email") 
            }
            
        }
        // window.location.reload(false);
    }

    const signIn = async () => {
        try{
            const user = await signInWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
            window.location.reload(false);
        }catch(error){
            console.log(error.message)
            alert("Entered login or password is incorrect!!! Please check it.")
        }
        
    }
    const logOut = async () => {
        await signOut(auth)
    }
    

    return(
        <div className={style.container}>
            <div className={style.header}>
                <Link to="/"> <img className={style.logo} src={logo} alt=""/></Link>
               
                <div className={style.reg}>
                       {!user && <button className={style.enter_btn} onClick={()=> setOpen(true)}>??????????</button> }
                       {user && 
                        <div className={style.authorized}>
                            {user?.email}
                            <div className={style.dropdown}>
                                <img src={ava} className={style.ava} alt="" />
                                <div className={style.dropdown_content}>
                                    <Link to="/publish">???????????????? ????????????????????</Link>
                                    <Link to="/">??????????????????</Link>
                                    <Link to="/">??????????</Link>
                                </div>
                            </div>
                            <img
                                src={signout}
                                onClick={logOut}
                                className={style.sign_out_image}
                                alt=""
                                title="sign out"
                            />
                        </div>}
                </div>
            </div>
            <Menu />
           
            <div className={`${style.modal} ${open ? style.visible : ""}` }>
                <div className={style.login_header}>???????? ???? udevs news</div>
              
                    <input
                        className={style.email}
                        onChange={(event) => { setregisterEmail(event.target.value) }}
                        type="email" 
                        placeholder="Email"
                    />
                    <input
                        className={style.parol}
                        onChange={(event) => { setregisterPassword(event.target.value) }}
                        type="password"
                        placeholder="????????????"
                    />
                    <button type="submit" type="submit" onClick={signIn} className={style.enter}>??????????</button>
                    <div className={style.sign_up}> not registered yet <span onClick={signUp}>Sign up</span> </div>
                
                  
                <button className={style.close} onClick={()=> setOpen(false)}>X</button>
            </div>
            {open && <div className={style.overlay}/>}
                
        </div>
    )
}

export default Header



