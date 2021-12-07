import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <ul className={s.nav}>
                <li className={s.item}><a className={s.link} href='#'>Главная</a></li>
                <li className={s.item}><a className={s.link} href="#">Скилы</a></li>
                <li className={s.item}><a className={s.link} href="#">Работы</a></li>
                <li className={s.item}><a className={s.link} href="#">Контакты</a></li>
            </ul>
        </div>
    );
};

export default Header;