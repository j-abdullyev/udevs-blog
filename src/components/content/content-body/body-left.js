import style from './content-body.module.css'
import ava from '../../../images/ava.png'
import bookmark from '../../../images/bookmark.png'


const Profile = () => {
    return(
        <div className={style.profile}>
            <img className={ava} src={ava}></img>
            <div className={style.profile_name}>Dilorom Alieva</div>
            <div className={style.follow}>
                <div className={style.follow_btn}>Follow</div>
                <div className={style.save_btn}> <img src={bookmark}></img> </div>
            </div>
        </div>
    )
}

export default Profile