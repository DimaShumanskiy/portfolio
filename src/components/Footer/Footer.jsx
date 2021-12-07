import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.wrapper}>
            <p>Дмитрий Шуманский</p>
            <div className={s.content}>
                <img className={s.img} src="" alt=""/>
                <img className={s.img} src="" alt=""/>
                <img className={s.img} src="" alt=""/>
                <img className={s.img} src="" alt=""/>
            </div>
        </div>
    );
};

export default Footer;