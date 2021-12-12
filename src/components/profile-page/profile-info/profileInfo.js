import ava from '../../../images/ava-profile.png'
import style from './profileInfo.module.css'
import guys2 from '../../../images/guys2.png'
import Footer from '../../home-page/footer/footer'
import PublishSettings from '../../publish-settings/publish-settings'


const ProfileInfo = (props) => {

    return(
        <div className={style.info_container}>
            <div className={style.profile_info}>
                <div className={style.img_info}>
                    <img src={ava} alt="ava" />
                </div>
                <div className={style.text_info}>
                    <div className={style.info_name}>Дилором Алиева</div>
                    <div className={style.box}>
                        <table cellspacing="0">
                            <tr>
                                <td>Карьера</td>
                                <td>Писатель</td>
                            </tr>
                            <tr>
                                <td>Дата рождения</td>
                                <td>2 ноября, 1974  ( 46 лет)</td>
                            </tr>
                            <tr>
                                <td>Место рождения</td>
                                <td>Черняховск, СССР (Россия)</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div className={style.publication}>
                <h3>ПУБЛИКАЦИИ</h3>

                
                
                <div className={style.publication_block}>
                    <img src={guys2}></img>
                    <div className={style.publication_text}>
                        <div className={style.p_header}>По инициативе Узбекистана создана Группа друзей по правам молодежи</div>
                        <div className={style.p_date}>18:26  11.01.2021 <span>|</span> <span>365</span> <span className={style.human_rights}>Права человека</span> </div>
                        <div className={style.p_text}>Посланник Генерального секретаря ООН по делам молодежи Джаятма Викраманаяке приняла участие в презентации созданной по инициативе Узбекистана Группе друзей по правам молодежи. В рамках этого международного проекта планируется продвижение прав молодых жителей планеты и расшире...</div>
                        <button className={style.read_btn}>Читать</button>
                    </div>
                </div>
            </div>

            <Footer />
           
        </div>
    )
    
}


export default ProfileInfo