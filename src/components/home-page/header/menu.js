import style from './header.module.css' 


const Menu = () => {
    return(
        <div className={style.menu}>
            <div className={style.inner_menu}>
                <div>Все потоки</div>
                <div>Разработка</div>
                <div>Администрирование</div>
                <div>Дизайн</div>
                <div>Менеджмент</div>
                <div>Маркетинг</div>
                <div>Научпоп</div>
            </div>
        </div>
    )
}


export default Menu