import style from './content-body.module.css'
import ava from '../../../images/ava.png'
import bookmark from '../../../images/bookmark.png'
import React from 'react';
import { Link } from 'react-router-dom';


const Profile = () => {
    return(
        <div className={style.profile}>
            <img className={ava} src={ava} alt=""></img>
            <Link to="/profile">
                <div className={style.profile_name}>Dilorom Alieva</div>
            </Link>
            
            <div className={style.follow}>
                <div className={style.follow_btn}>Follow</div>
                <div className={style.save_btn}> <img src={bookmark} alt=""></img> </div>
            </div>
        </div>
    )
}

export default Profile