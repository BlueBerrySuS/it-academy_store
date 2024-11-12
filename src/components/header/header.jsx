
import style from './header.module.css'
import userAvatar from '../../assets/user_avatar.svg'

function Header({ isGuest }) {
    return (
        <div className={style.header }>
            <div className={`${style.logo_wrap} ${style.header_elem_wrap}`}>
                <span className={style.logo}>IT-Academy</span>
            </div>
            <div className={`${style.nav_wrap} ${style.header_elem_wrap}`}>
                <nav className={style.nav}>
                    <a className={style.nav_buttons}>Каталог</a>
                    <a className={style.nav_buttons}>Корзина</a>
                </nav>
            </div>
            <div className={`${style.log_wrap} ${style.header_elem_wrap}`}>
                {isGuest
                ? <img src={userAvatar} className={style.user_avatar}/>
                : <button className={style.log_button}>Войти</button>
                }
            </div>
        </div>
    )
};

export default Header;